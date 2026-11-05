// Journal météorologique de la ferme — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { ajouterReleve, formaterReleve, listerReleves, trouverParId } from './src/registre.js';
import { SEUIL_JOUR_PLUVIEUX, joursPluvieux, trierParPluie, trierParTemperature, trouverParDate } from './src/recherche.js';
import { cumulPluie, moyenneTemperature, temperatureMinMax } from './src/synthese.js';

const FICHIER_DONNES = 'donnees/releves.json';

async function main() {
    let releves = [];
    console.log('==============');
    console.log('  JOURNAL MÉTÉOROLOGIE DE LA FERME');
    console.log('=================');

    try {
        ouvrirSaisie();
        releves = await chargerJson(FICHIER_DONNES);

        if (!Array.isArray(releves)) {
            releves = [];
        }
        console.log(`${releves.length} relevé(s) chargé(s)`);

        let continuer = true;
        while (continuer) {
            console.log('\n========== MENU PRINCIPAL =========');
            console.log('1. Ajouter un relevé');
            console.log('2. Lister les relevés');
            console.log('3. Rechercher (identifiant, date, journées pluvieuses)');
            console.log('4. Trier (température, pluie)');
            console.log('5. Synthèse de la série');
            console.log('0. Quitter');

            const choix = await demander('Votre choix : ');
            switch (choix.trim()) {
                case '1': {
                    const saisie = {
                        id: (await demander('Identifiant : ')).trim(),
                        date: (await demander('Date (AAAA-MM-JJ) : ')).trim(),
                        temperatureC: await demander('Température (°C) : '),
                        pluieMm: await demander('Pluie (mm) : '),
                        humiditeAirPct: await demander("Humidité de l'air (%) : ")
                    };

                    const erreurs = ajouterReleve(releves, saisie);
                    if (erreurs.length === 0) {
                        await enregistrerJson(FICHIER_DONNES, releves);
                        console.log('Relevé ajouté et enregistré avec succès.');
                    } else {
                        erreurs.forEach(erreur => console.log(erreur));
                    }
                    break;
                }
                case '2': {
                    console.log(listerReleves(releves));
                    break;
                }
                case '3': {
                    console.log('\n--- RECHERCHE ---');
                    console.log('1. Par identifiant');
                    console.log('2. Par date');
                    console.log('3. Journées pluvieuses');
                    const sousChoix = (await demander('Votre choix : ')).trim();
                    if (sousChoix === '1') {
                        const id = (await demander('Identifiant du relevé : ')).trim();
                        const resultat = trouverParId(releves, id);
                        if (resultat) {
                            console.log(formaterReleve(resultat));
                        } else {
                            console.log('Aucun relevé trouvé avec cet identifiant.');
                        }
                    } else if (sousChoix === '2') {
                        const date = (await demander('Date (AAAA-MM-JJ) : ')).trim();
                        const resultat = trouverParDate(releves, date);
                        if (resultat) {
                            console.log(formaterReleve(resultat));
                        } else {
                            console.log('Aucun relevé trouvé à cette date.');
                        }
                    } else if (sousChoix === '3') {
                        const resultats = joursPluvieux(releves);
                        console.log(`Seuil d'un jour pluvieux : ${SEUIL_JOUR_PLUVIEUX} mm`);
                        if (resultats.length === 0) {
                            console.log('Aucune journée pluvieuse trouvée.');
                        } else {
                            resultats.forEach(releve => {
                                console.log(formaterReleve(releve));
                            });
                        }
                    } else {
                        console.log('Choix invalide.');
                    }
                    break;
                }
                case '4': {
                    console.log('\n--- TRI DES RELEVÉS ---');
                    console.log('1. Par température');
                    console.log('2. Par pluie');
                    const sousChoix = (await demander('Votre choix : ')).trim();
                    let resultats;
                    if (sousChoix === '1') {
                        resultats = trierParTemperature(releves);
                    } else if (sousChoix === '2') {
                        resultats = trierParPluie(releves);
                    } else {
                        console.log('Choix invalide.');
                        break;
                    }
                    if (resultats.length === 0) {
                        console.log('Aucun relevé à trier.');
                    } else {
                        resultats.forEach(releve => {
                            console.log(formaterReleve(releve));
                        });
                    }
                    break;
                }
                case '5': {
                    if (releves.length === 0) {
                        console.log('Aucun relevé disponible pour effectuer une synthèse.');
                        break;
                    }
                    console.log('\n===== SYNTHÈSE MÉTÉOROLOGIQUE =====');
                    console.log(`Nombre de relevés : ${releves.length}`);
                    console.log(`Cumul des pluies : ${cumulPluie(releves)} mm`);
                    console.log(`Température moyenne : ${moyenneTemperature(releves)} °C`);
                    const extremes = temperatureMinMax(releves);
                    console.log('Température minimale et maximale :');
                    console.log(extremes);
                    break;
                }
                case '0': {
                    continuer = false;
                    console.log('Au revoir !');
                    break;
                }
                default:
                    console.log('Choix invalide. Veuillez choisir un nombre entre 0 et 5.');
            }
        }
    } catch (erreur) {
        console.error('Une erreur est survenue :', erreur.message);
    } finally {
        fermerSaisie();
    }
}

main();