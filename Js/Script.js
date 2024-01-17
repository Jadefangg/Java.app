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
        <li class="card" id="mycard">
        <img class="card-image" src="${pokeman.image}"/>
        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
        <p class="card-subtitle">Type: ${pokeman.type}</p>

        <!-- Trigger the modal with a button -->
        <button type="button" class="btn" id="modalbutton" data-toggle="modal" data-target="#myModal-${index}">Poke-Info!</button>
        
        <!-- Modal -->
        <div id="myModal-${index}" class="modal modalp" role="dialog">
              <h2>${pokeman.name} is a </h2>
              <h2>${pokeman.type} type pokemon</h2>
              </div>
    </li>    
        `;
    }).join('');
        
    pokedex.innerHTML = pokemonHTMLString;
     // Add event listeners to the buttons
     pokemon.forEach((pokeman, index) => {  
        document.getElementById(`openModal-${index}`).addEventListener('click', () => {
            $(`#myModal-${index}`).modal('show');
        });
    });

  
};

fetchPokemon();