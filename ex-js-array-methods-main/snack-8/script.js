const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

//^ Find
const classeDiMarcoLanci = students.find(function(student) {
  return student.name === "Marco Lanci";
});
const classOfMarco = classeDiMarcoLanci ? classeDiMarcoLanci.class : null;
console.log(classeDiMarcoLanci ? classeDiMarcoLanci.class : null);

console.log("");
console.log("Arrow function");


//fixed Arrow Function
const MarcoLanciAula = students.find(student => student.name === "Marco Lanci")?.class

console.log(MarcoLanciAula);













// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'