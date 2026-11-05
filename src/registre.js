// Ajouter et lister les relevés.
// Fiche : fiches/3-ajouter-lister.md · Vérifier : npm run test:registre
import { estDateValide, versNombre } from './outils.js';

// Renvoie une ligne de texte qui décrit le relevé.
// Exemples : 'M08 | 2026-10-22 | 26 °C | 15 mm | air 85 %'
//            'M11 | 2026-10-25 | 27.5 °C | 4 mm | air 79 %' (JavaScript affiche un point décimal,
//            même si la virgule est acceptée à la saisie)
export function formaterReleve(releve) {
  return `${releve.id} | ${releve.date} | ${releve.temperatureC} °C | ${releve.pluieMm} mm | air ${releve.humiditeAirPct} %`;
  
}

// Renvoie un texte avec un relevé par ligne (lignes séparées par '\n'),
// ou 'Aucun relevé enregistré.' si la liste est vide.
export function listerReleves(releves) { 
  if (releves.length === 0){
    return 'Aucun relevé enregistré.';
  }
  return releves.map(formaterReleve) .join ('\n');
}

// Renvoie le relevé qui a cet identifiant, ou undefined s'il n'existe pas.
export function trouverParId(releves, id) {
  return releves.find(releves => releves.id === id)
}

// Contrôle une saisie AVANT de l'ajouter. Tous les champs arrivent sous forme de TEXTE :
// { id: 'M11', date: '2026-10-25', temperatureC: '27,5', pluieMm: '4', humiditeAirPct: '79' }
// Renvoie un tableau de messages d'erreur ; un tableau vide signifie « saisie valide ».
// Règles : id obligatoire et unique · date réelle au format AAAA-MM-JJ · temperatureC nombre
// (négatif ou décimal accepté) · pluieMm nombre positif ou nul · humiditeAirPct nombre entre 0 et 100.
// Un message par règle non respectée ; n'ajoutez aucune autre règle. Le journal reçu n'est pas modifié.
export function verifierReleve(saisie, releves) {
  const erreurs = [];

  if (!saisie.id || saisie.id.trim() === '') {
    erreurs.push("L'identifiant est obligatoire");
  }
  if (saisie.id && releves.some(releve => releve.id === saisie.id)) {
    erreurs.push("Cet identifiant existe déjà");
  }

  const date = saisie.date;
  const dateVerifiee = new Date(date);

  if (
    date.length !== 10 ||
    isNaN(dateVerifiee.getTime()) ||
    dateVerifiee.toISOString().slice(0, 10) !== date
  ) {
    erreurs.push("Invalide ! La date doit etre au format AAAA-MM-JJ.")
  }
  const temperature = Number(saisie.temperatureC.replace(',' , '.'));
  if (saisie.temperatureC.trim() === '' || !Number.isFinite(temperature)) {
    erreurs.push("La température doit etre un nombre.");
  }
  const pluie = Number(saisie.pluieMm.replace(',' , '.'));
  if (saisie.pluieMm.trim() === '' || !Number.isFinite(pluie) || pluie < 0) {
    erreurs.push("La pluie  doit etre un nombre positif ou nul");
  }
  const humidite = Number(saisie.humiditeAirPct.replace(',' , '.'));
  if (
    saisie.humiditeAirPct.trim() === '' || 
    humidite < 0 || 
    humidite > 100 
    ) { 
      erreurs.push("L'humididé doit etre comprise entre 0 et 100");
    }
    return erreurs;
  }

// Fabrique le relevé à enregistrer à partir d'une saisie VALIDE : les trois mesures deviennent des nombres.
export function creerReleve(saisie) {
  return { 
    id: saisie.id,
    date: saisie.date,
    temperatureC: Number(saisie.temperatureC.replace(',' , '.')),
    pluieMm: Number(saisie.pluieMm.replace(',' , '.')),
    humiditeAirPct: Number(saisie.humiditeAirPct.replace(',' , '.'))
  };
}

// Ajoute la saisie au journal si elle est valide (verifierReleve, puis creerReleve).
// Renvoie les erreurs : [] si le relevé a été ajouté ; sinon les messages, et rien n'est ajouté.
export function ajouterReleve(releves, saisie) {
  const erreurs = verifierReleve(saisie, releves);
  if (erreurs.length > 0) {
    return erreurs;
  }
  const nouveauReleve = creerReleve(saisie);
  releves.push(nouveauReleve);
  return [];
}
