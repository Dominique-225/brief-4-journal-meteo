# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | M04 |
| `date` | Date du relevé | date | format AAAA-MM-JJ | - | 2026-10-18 |
| `temperatureC` | Température en dégré celcuce  | nombre | un nombre négatif ou décimal possible | °C | 29°C |
| `pluieMm` |Pluie du jour |nombre |un nombre positif ou nul | mm| 0 |
| `humiditeAirPct` | humudité relative de l'air | nombre | entre 0 et 100 | % | 70 |

**Listes de valeurs autorisées** : 
id: texte bon vide, absent des données; temperatureC:un nombre, négatif ou décimal possible
date: format AAAA-MM-JJ; humiditeAirPct: entre 0 et 100; PluieMm: un nombre positif ou nul

**Sources** : 
Sources: SUJET.md;donnes/releves.json
