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
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll()); 

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});