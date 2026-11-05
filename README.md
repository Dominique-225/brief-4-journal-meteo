# Journal météorologique de la ferme

> Projet individuel du SAS DFS, brief 4 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

Le responsable de la ferme pédagogique utilise cet outil pour saisie, consulter, rechercher et classer les relevé météorologiques de son exploitation. L'outil permet d'organiser les données relatives à la température, à la pluviométrie et à l'humidité de l'air afin de mieux comprendre les conditions météorologique pendant les activités agricoles. Par ricochet il ne permet pas de prévoir avec certitude le temps ni de définir le climat à partir de quelques jours d'observation.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-4-journal-meteo.git
cd brief-4-journal-meteo
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [x] Données lues et enregistrées dans `donnees/releves.json`
- [x] Ajouter un relevé, saisies invalides refusées sans arrêter le programme
- [x] Lister les relevés, message si le journal est vide
- [x] Rechercher par identifiant ou par date ; journées pluvieuses (au moins 10 mm)
- [x] Trier par température ou par pluie
- [x] Synthèse : température moyenne, minimale et maximale de la série, cumul de pluie, journées pluvieuses
- [x] Bonus : supprimer et modifier un relevé (choix 6 et 7)
- [x] Bonus : tri par température décroissante, journée la plus chaude

## Données

Les données de départ sont des exemples fictifs stockés dans donnees/releves.json. Chaque relevé contient cinq champs : id (identifiant unique), date (format AAAA-MM-JJ), temperatureC (°C), pluieMm (mm) et humiditeAirPct (humidité relative de l'air, en %). Les règles et exemples sont détaillés dans le dictionnaire des données.

Avec les dix observations de départ (du 15 au 24 octobre 2026), les résultats de référence sont : température moyenne 28 °C, minimum 26 °C, maximum 30 °C, cumul de pluie 45 mm et deux journées avec au moins 10 mm de pluie.

## Limites

_Dix jours constituent une courte série et ne permettent pas de décrire le climat de la région.
_Le seuil de 10 mm est une catégorie de l'exercice ; il ne constitue pas une prévision d'inondation ou de stress hydrique.
_L'humidité relative de l'air ne renseigne pas sur l'humidité du sol.
_Le programme vérifie le format et les valeurs des relevés, mais ne contrôle pas que les dates sont consécutives, sans doublon ni trou.
L_es données de départ sont fictives et ne doivent pas être utilisées comme observations agricoles réelles.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

Prénom NOM: Anvou Claude Orlande Dominique KONAN
Compte GitHub: Dominique-225 !
Entraide : Evelyne MAMADOU, Cheick SOUMAHORO, 