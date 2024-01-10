const pokedex = document.getElementById('pokedex'); //declared under id in html
const modal=document.querySelector("#modal");
const openModal=document.querySelector('.open-button')
const closeModal = document.querySelector(".close-button");

const fetchPokemon = () => {    //empty array
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({       //the categories being defined here for a more convinient peice of code
             name: result.name,
             image: result.sprites['front_default'],
             type: result.types.map((type) => type.type.name).join(', '),
             id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => 
            `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
           <!-- <p class="card-subtitle">Type: ${pokeman.type}</p>-->

            <button class="button open-button2"  >Poke type!</button>
           <dialog class="modal" id="modal2">
           <h2>${pokeman.type}</h2>

           <button class="button close-button2">close modal</button>
       </dialog>
       </li> `
        )
        .join('');
        // const declared for the new modal which should display each pokemons type, along witht he declaration of the new openmodal2 and new closemodal2
        const modal2 = document.querySelector("#modal2"); 
        const openmodal2=document.querySelector('.open-button2');
        const closemodal2=document.querySelector('.close-button2');

        openmodal2.addEventListener("click",() =>{
            modal2.showModal();
         });
         closemodal2.addEventListener("click", ()=>{
            modal2.close();
         });

        openModal.addEventListener("click", () => {
            modal.showModal();
          });
          closeModal.addEventListener("click", () => {
            modal.close();
          });
          
        pokedex.innerHTML = pokemonHTMLString;
}
   fetchPokemon();
