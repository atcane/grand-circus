// Create an Animal with the following properties:
// Name: BJ
// Pockets: []
// Bells: 200
// HomeLoan: 2000

const animal = {
    name: "Ashley",
    pockets: [],
    bells: 400,
    homeLoan: 2000,
    displayName() {
      console.log(`Hello! My name is ${this.name}`);
    },
  };

// Print out the contents of the animal's bells
console.log(animal.bells);

// Create another animal with completely different properties
const animal1 = {
    name: 'Tiia',
    pockets: [],
    bells: 300,
    homeLoan: 2000
};
console.log(animal1.bells);

// console.log the name of the animal with the most bells?
if (animal.bells > animal1.bells) {
    name = animal.name;
    
    console.log(`${name} has more bells`)

} else if (animal1.bells > animal.bells) {
    name = animal1.name;

    console.log(`${name} has more bells`);   
} else {
    console.log(`No one has more bells`);   
}

// How to shorten the above code
// console.log the name of the animal with the most bells?
if (animal.bells > animal1.bells) {
    name = animal.name;
} else if (animal1.bells > animal.bells) {
    name = animal1.name;
} else {
    name = 'No one';
}

// Change Ashley's name to Bradley
animal.name = "Bradley";
console.log(animal);

animal.displayName();
