let pokemonRepository = (function () {

  let pokemonList = [ 
    {
      name: 'Gastly', 
      height: 1.3, 
      type: ['Ghost','Poison']
    },
    {
      name: 'Haunter', 
      height: .6, 
      type: ['Ghost','Poison']
    },
    {
      name: 'Bulbasaur', 
      height: 0.7, 
      type: ['Grass','Poison']
    }
  ]

  function getAll () {
    return pokemonList;
  }
  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  }

})()

console.log(pokemonRepository.getAll())
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll()); 


pokemonRepository.getAll().forEach(function(pokemon) {
  console.log(pokemon.name + ' ' + pokemon.height);
});
