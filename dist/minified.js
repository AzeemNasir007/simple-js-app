let pokemonRepository=function(){let t=[];function e(){return t}function n(e){t.push(e)}function o(t){pokemonRepository.loadDetails(t).then(function(){!function t(e){let n=$(".modal-body"),o=$(".modal-title");o.empty(),n.empty();let i=$("<h1>"+e.name+"</h1>"),l=$('<img class="modal-img style=width:50%">');l.attr("src",e.imageUrl);let a=$("<p>height : "+e.height+"</p>"),s=$("<p>weight : "+e.weight+"</p>");o.append(i),n.append(l),n.append(a),n.append(s);let p="<p>";e.types.forEach((t,n)=>{3===p.length&&(p+="types: "),p+=`${t.type.name}`,n<e.types.length-1&&(p+=", ")});let r=$(p+="</p>");n.append(r)}(t)})}return{getAll:e,add:n,addListItem:function t(e){let n=document.querySelector(".pokemon-list"),i=document.createElement("li");n.classList.add("group-list-item"),n.classList.add("col-sm-4","col-md-6","col-lg-12");let l=document.createElement("button");l.addEventListener("click",()=>console.log[e]),l.innerText=e.name,l.classList.add("button-class"),l.setAttribute("data-toggle","modal"),l.setAttribute("data-target","#pokemon-modal"),$(l).addClass("button-class btn-block"),i.appendChild(l),n.appendChild(i),l.addEventListener("click",function(){o(e)})},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){let e={name:t.name,detailsUrl:t.url};n(e),console.log(e)})}).catch(function(t){console.error(t)})},loadDetails:function t(e){return fetch(e.detailsUrl).then(function(t){return t.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.weight=t.weight,e.types=t.types}).catch(function(t){console.error(t)})},showDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});