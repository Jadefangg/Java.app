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
        const pokemon = results.map((result) => ({       //the categories are being defined here for a more convenient peice of code.
             name: result.name,
             image: result.sprites['front_default'],
             type: result.types.map((type) => type.type.name).join(','),
             id: result.id
        }));
        displayPokemon(pokemon);
    });
};



const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon.map((pokeman, index) => {
        return `
            <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
        <p class="card-subtitle">Type: Click below for more info! </p>

                <button class="btn open-button" data-index="${index}">Poke-Info!</button> 
                <dialog class="modal" id="modal-${index}">
                    <div class="modal-content">
                    <p>${pokeman.name} is a ${pokeman.type} type Pokemon.</p>
                    </div>  
                </dialog>
            </li>    
        `;
    }).join('');
        
    pokedex.innerHTML = pokemonHTMLString;

    const openButtons = document.querySelectorAll('.open-button');
    openButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const modal = document.querySelector(`#modal-${index}`);
            modal.showModal();
        });
    });
};
   fetchPokemon();
