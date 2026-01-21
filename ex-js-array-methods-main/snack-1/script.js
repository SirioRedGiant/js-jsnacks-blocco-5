const names = ["Edoardo", "Simone", "Francesco"];
names.forEach((name) => console.log(names.join(", ")));

console.log("========= TRY ALTERNATIVO =========")
for (const name of names) {
  console.log(names.join(", "));
}
// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'
