let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
  function getAll () {
    return pokemonList;
  }
  
  function add (pokemon) {
    pokemonList.push(pokemon);
  }
  
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    pokemonList.classList.add("group-list-item");
    pokemonList.classList.add("col-sm-4", "col-md-6", "col-lg-12");
    let button = document.createElement("button");
    button.addEventListener("click", () => console.log[pokemon]);
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#pokemon-modal");
    $(button).addClass('button-class btn-block');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }
  
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }
  
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
      item.abilities = details.abilities;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");

    modalTitle.empty();
    modalBody.empty();

    // creating element for name in modal content
    let nameElement = $("<h1>" + item.name + "</h1>");
    // creating element for img in modal content
    let imageElement = $('<img class="modal-img style=width:50%">');
    imageElement.attr("src", item.imageUrl);
    // creating element for height in modal content
    let heightElement = $("<p>" + "height : " + item.height + "</p>");
    // creating element for weight in modal content
    let weightElement = $("<p>" + "weight : " + item.weight + "</p>");
    
    
    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
     
    // creating element for type in modal content

    item.types.forEach((type) => {
      let typesElement = $("<p>" + "types: " + type.type.name + "</p>");
      modalBody.append(typesElement);
    })
      

     // creating element for abilities in modal content
    item.abilities.forEach((ability) => {
      let abilitiesElement = $("<p>" + "abilities: " + ability.ability.name + "</p>");
      modalBody.append(abilitiesElement);
    })
  }
  

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

