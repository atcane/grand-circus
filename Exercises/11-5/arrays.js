const animal = {
    name: "BJ",
    pockets: [200, 'Hammer', 'Book', { name: "T-rex", type: 'fossil' }],
    bells: 400,
    homeLoan: 2000,
    displayName() {
      console.log(`Hello! My name is ${this.name}`);
    },
  };
  
  
  console.log('POCKETS BEFORE', animal.pockets);
  
  const notebook = 'Leather Notebook';
  // animal.pockets.push(notebook);  // add to end
  // animal.pockets.unshift(notebook);  // add to beginning
  
  // (index, how many to remove (can be 0), what you're putting in its place)
  animal.pockets.splice(2, 0, notebook); // Add notebook to index 2, removing nothing
  animal.pockets.splice(4, 1, notebook); // Add notebook to index 4, removing remove one thing starting at index 4
  animal.pockets.splice(4, 2, notebook); // Add notebook to index 4, removing remove one thing starting at index 4
  
  console.log('POCKETS AFTER', animal.pockets);


  // Sort the animals by first name
const animals1 = animals.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  
  console.log(animals1);
  console.log("----------------");
  
  // find the animal with 500 bells
  console.log(
    animals.find(function (animal) {
      return animal.bells === 500;
    })
  );
  // equals -- using arrow functions
console.log(animals.find(animal => animal.bells === 500));

  // equals
  let found;
  for (animal of animals) {
    if (animal.bells === 500) {
      found = animal;
    }
  }
  
  console.log(animal);
  // Print out the names of each animals
  