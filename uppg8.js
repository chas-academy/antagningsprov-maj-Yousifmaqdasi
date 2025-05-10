

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
  const personer = [
    { name : "Alex", age: 24 },
    { name : "Sara", age: 22 },
    { name : "Emma", age: 28 },
    { name : "Daniel", age: 34 },
    { name : "Sandra", age: 40 }
    ];
  
  function over30(personen){
    for (let person of personen) {
      if (person.age > 30){
        console.log(person.name);
      }
    }
}
  over30(personer)
}

module.exports = { uppg8 };
