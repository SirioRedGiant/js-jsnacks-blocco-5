const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]


//^ forEach
const arrOfAuthorNames = [];
posts.forEach(function(post) {
  arrOfAuthorNames.push(post.author);
});
console.log(arrOfAuthorNames)

console.log("");
console.log("===== ArrowFunction -> forEach =====");

//note forEach Arrow function
const authorNamesArrow = [];

posts.forEach(post => authorNamesArrow.push(authorNamesArrow.author));
console.log(authorNamesArrow);

console.log("");
console.log("===== Map =====");

//fixed Map way
const namesOfAuthor = posts.map(function(post) {
  console.log(post.author);
});

console.log("");
console.log("===== Arrow Function Map =====");

//* Map in Arrow f
const authorsNames = posts.map(post => console.log(post.author)
);

console.log("");
console.log("===== Mission Completed... =====");
console.log(arrOfAuthorNames.join(", "));











// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']