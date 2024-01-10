const pokedex=document.getElementById("pokedex"),modal=document.querySelector("#modal"),openModal=document.querySelector(".open-button"),closeModal=document.querySelector(".close-button"),fetchPokemon=()=>{let e=[];for(let o=1;o<=150;o++){let t=`https://pokeapi.co/api/v2/pokemon/${o}`;e.push(fetch(t).then(e=>e.json()))}Promise.all(e).then(e=>{let o=e.map(e=>({name:e.name,image:e.sprites.front_default,type:e.types.map(e=>e.type.name).join(", "),id:e.id}));displayPokemon(o)})},displayPokemon=e=>{console.log(e);let o=e.map(e=>`
        <li class="card">
            <img class="card-image" src="${e.image}"/>
            <h2 class="card-title">${e.id}. ${e.name}</h2>
            <p class="card-subtitle">Type: ${e.type}</p>
            <button class="button open-button"  >Poke Info!</button>
            <dialog class="modal" id="modal">
            <h2>${e.type}</h2>
            
            <button class="button close-button">close modal</button>
        </dialog>
       
        </li> `).join("");openModal.addEventListener("click",()=>{modal.showModal()}),closeModal.addEventListener("click",()=>{modal.close()}),pokedex.innerHTML=o};fetchPokemon();