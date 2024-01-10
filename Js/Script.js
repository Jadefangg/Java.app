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
        const pokemon = results.map((result) => ({       //the categories being defined here for a more convenient peice of code
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
           <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

           <!-- Modal -->
           <div id="myModal" class="modal fade" role="dialog">
             <div class="modal-dialog">
           
               <!-- Modal content-->
               <div class="modal-content">
                 <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal">&times;</button>
                   <h4 class="modal-title">Modal Header</h4>
                 </div>
                 <div class="modal-body">
                   <p>${pokeman.type}</p>
                 </div>
                 <div class="modal-footer">
                   <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                 </div>
               </div>
           
             </div>
           </div>
       </li> 
       `
        )
        
        .join('');
        // const declared for the new modal which should display each pokemons type, along witht he declaration of the new openmodal2 and new closemodal2
       
        

        openModal.addEventListener("click", () => {
            modal.showModal();
          });
          closeModal.addEventListener("click", () => {
            modal.close();
          });
          
        pokedex.innerHTML = pokemonHTMLString;
}
   fetchPokemon();
