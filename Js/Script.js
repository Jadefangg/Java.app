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
        const pokemon = results.map((result) => ({
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
            <p class="card-subtitle">Type: ${pokeman.type}</p>
            <button class="button open-button">open modal</button>
        <dialog class="modal" id="modal">
            <h2>An interesting title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse nisi, laboriosam illum temporibus ipsam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.</p>
            <button class="button close-button">close modal</button>
        </dialog>
       
        </li> `
        )
        
        .join('');
        openModal.addEventListener("click", () => {
            modal.showModal();
          });
          closeModal.addEventListener("click", () => {
            modal.close();
          });
          
        pokedex.innerHTML = pokemonHTMLString;
}
   fetchPokemon();
