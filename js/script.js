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


const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


// const itemsLeft = document.getElementsByClassName('item-left');
// console.log(itemsLeft);

// const itemsRight = document.getElementsByClassName('item-right');
//console.log(itemsRight);

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
// console.log(prev);
// console.log(next);

let counter = 0;
//console.log(counter);

//console.log('item in base al counter',itemsLeft[counter]);

prev.addEventListener('click',function(){
  console.log(itemsLeft[counter]);

  counter--;

  if(counter < 0){
    counter = itemsLeft.length - 1;
  }
});

next.addEventListener('click',function(){
  
  console.log(itemsLeft[counter]);

  console.log(`${counter} > ${itemsLeft.length}`);

  counter++;

  if(counter > itemsLeft.length - 1){
    counter = 0;
  }
});
