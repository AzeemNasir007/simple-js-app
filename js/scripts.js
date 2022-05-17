let pokemonList= [ 
  {name: "Gastly", Height: "1.3", Type: ["Ghost","Poison"]},
  {name: "Haunter", Height: "1.6", Type: ["Ghost","Poison"]},
  {name: "Bulbasaur", Height: "0.7", Type: ["Grass","Poison"]}
];

//Goes through the pokemon list until all the items are reached
for (let i = 0; i < pokemonList.length; i++) {
  document.write('<br>' + pokemonList[i].name + ' ' + pokemonList[i].Height + ' ');

  //If criteria is met, pokemon would have a comment next to it
  if (pokemonList[i].Height >= 1.4) {
    document.write(' - Wow that is quite big!! ');
  }
}




