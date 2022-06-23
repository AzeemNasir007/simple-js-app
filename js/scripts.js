let pokemonList= [ 
  {
    name: "Gastly", 
    height: "1.3", 
    type: ["Ghost","Poison"]
  },
  {
    name: "Haunter", 
    height: "1.6", 
    type: ["Ghost","Poison"]
  },
  {
    name: "Bulbasaur", 
    height: "0.7", 
    type: ["Grass","Poison"]
  }
];


pokemonList.forEach(function(pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.Height + ' tall.');
});