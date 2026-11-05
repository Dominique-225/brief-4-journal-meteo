# Tableau des tâches

> Planifiez vous-même, puis tenez le tableau à jour. Une preuve : un commit, un test vert, un document.

| Tâche | Prévu | Fait le | Preuve |
| --- | --- | --- | --- |
| Poste et dépôt prêts ; besoin compris ; documents commencés | 2026-11-02| 2026-11-02|initial commit |
| Fiche 2 : lire et écrire le JSON |2026-11-02 | 2026-11-02| commit -m implementation de la lecture et l'ecriture json|
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs | 2026-11-02| 2026-11-02|commit -m verifier,ajouter et cree relever|
| Fiche 4 : rechercher et trier ; choix 3 et 4 |2026-11-02 |2026-11-02 |commit -m ajoute la recherche et le trie des releve |
| Fiche 5 : synthèse ; choix 5 |2026-11-04 |2026-11-04 | commit -m "Ajoute les statistiques météorologiques|
| Tests par un camarade ; mes propres tests | 2026-11-05|2026-11-05 |commit -m construit le journal interactif du journal meteo |
| Fiche agronomique ; README ; documents | 2026-11-05|2026-11-05 | |
| Dépôt cloné et lancé ailleurs ; démonstration répétée | 2026-11-05|2026-11-05 | |
| Bonus | 2026-11-05| 2026-11-05|commit -m "Implémente les fonctions bonus du journal" |


**Blocages** (le message exact, ce que j'ai essayé, la solution) : 
J'ai rencontré le message :

remote: Permission to Digital-Farming-School/brief-4-journal-meteo.git denied to FAST225.

fatal: unable to access ... The requested URL returned error: 403.

J'ai compris que le compte GitHub utilisé, FAST225, ne disposait pas des autorisations nécessaires pour envoyer ses modifications vers ce dépôt.

J'ai également rencontré le message :

error: remote origin already exists.

Cela signifiait qu'une adresse distante appelée origin était déjà configurée.

J'ai appris qu'il fallait vérifier l'adresse existante avec git remote -v, puis utiliser git remote set-url origin pour la remplacer si nécessaire, ou demander les droits d'accès au dépôt.
