/*
Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.

Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
 - titolo
 - testo.

 Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.
*/

/*
1. costruiamo del carosello una versione statica contenente un’immagine grande con del testo ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come “template”.

2. scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare

3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: “Quanti cicli servono?”
*/

const itemsLeft = document.getElementsByClassName('item-left');
console.log(itemsLeft);

let counter = 0;
// console.log(counter);

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// console.log(prev);
// console.log(next);
