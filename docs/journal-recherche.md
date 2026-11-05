# Journal de recherche

> Chaque recherche utile : ce que vous cherchiez, où (cours, [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript), [Node.js](https://nodejs.org/api/), un camarade, une IA…), ce que vous avez compris. Ce que vous gardez, vous devez pouvoir l'expliquer.

| Ce que je cherchais | Où | Ce que j'ai compris | Utilisé dans |
| --- | --- | --- | --- |
| trim | [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript)  | trim est méthode des chaîne de caractères (string) qui supprime les espaces au début et à la fin d'une chaîne | (!saisie.id || saisie.id.trim() === '') |
| find | [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript) | find est une méthode des tableau qui retourne le premier élément qui satisfaire une fonction | export function trouverParDate(releves, date) {
  return releves.find(releve => releve.date === date);
  } |
| await | claude IA | await met yne fonction en pause jusqu'à ce qu'une opération lente soit terminée, puis te donne son résultat | const jsonText = await readFile(chemin, 'utf8'); |
