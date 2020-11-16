const characters = [
    {
        name: "character 1", 
        health: 90},
   
    {
        name: "character 2",
        health: 87},
   
    {
        name: "character 3",
        health: 79},
   ];
   
   const opponent = {
       name: "opp",
       health: 93,
   };
   
  // for loop inside of do loop 
  // do {
      for (name in characters) {
          console.log(name, health)
      }

console.log(characters,opponent)
   
  characters = prompt ("Pick a character", "1, 2, or 3");

  //}