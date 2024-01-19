const pokedex=document.getElementById("pokedex"),modal=document.querySelector("#modal"),openModal=document.querySelector(".open-button"),closeModal=document.querySelector(".close-button"),fetchPokemon=()=>{let e=[];for(let o=1;o<=150;o++){let t=`https://pokeapi.co/api/v2/pokemon/${o}`;e.push(fetch(t).then(e=>e.json()))}Promise.all(e).then(e=>{let o=e.map(e=>({name:e.name,image:e.sprites.front_default,type:e.types.map(e=>e.type.name).join(","),id:e.id}));displayPokemon(o)})},displayPokemon=e=>{console.log(e);let o=e.map((e,o)=>`
        <li class="card" id="mycard">
        <img class="card-image" src="${e.image}"/>
        <h2 class="card-title">${e.id}. ${e.name}</h2>
        <p class="card-subtitle">Type: ${e.type}</p>

        <!-- Trigger the modal with a button -->
        <button type="button" class="btn" id="modalbutton" data-toggle="modal" data-target="#myModal-${o}">Poke-Info!</button>
        
        <!-- Modal -->
        <div id="myModal-${o}" class="modal modalp" role="dialog">
              <h2>${e.name} is a </h2>
              <h2>${e.type} type pokemon</h2>
              </div>
    </li>    
        `).join("");pokedex.innerHTML=o,e.forEach((e,o)=>{document.getElementById(`openModal-${o}`).addEventListener("click",()=>{$(`#myModal-${o}`).modal("show")})})};fetchPokemon();