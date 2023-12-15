let pokemonrespository=(function(){
let pokemonlist = [];
let pokemonAPIurl='https://pokeapi.co/api/v2/pokemon/?limit=150';
//-----------------------------------------------
let pokemon=[]; //empty array
     //getall function to return pokemonlist.
  pokemonRepository.getAll(){
    return pokemonlist;
  }
        //add(pokemon) function.
  pokemonRepository.add(){
   pokemonlist.push(pokemon);
  }
  pokemonRepository.getAll().forEach((pokemon) => {
   pokemonRepository.addListItem(pokemon);})

   function addListItem(pokemon){
    let ulItem = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    
    button.innerText = pokemon.name; //what is inside button

    button.classList.add("pokemon-button");

    listItem.appendChild(button);
    ulItem.appendChild(listItem);
   }

    button.addEventListener("click", function () 
    {
      showDetails(pokemon.name);
      button.innerText = pokemon.name;

  button.classList.add("pokemon-button"); //css added to this

       listItem.appendChild(button);
       ulItem.appendChild(listItem);
    }
    )();
    function loadList(){
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
  
    return {
      add: add,
      getAll: getAll,
      loadList: loadList
    };
  })();
  pokemonRepository.loadList().then(function() {
    // Now the data is loaded
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });

      // --------------------------MODAL BEGINS--------------------------

      function showmodal(pokemon){

        let mcontainer = document.querySelector('#modalcontainer');
        mcontainer.innerHTML=''; //clear all existing content
        let modal = document.createElement('div');
        modal.classList.add(modal);
        let closebutton = document.createElement('closebutton');
        closebutton.classList.add('modal-close');
        closebutton.innerText=('close');
        let title =document.createElement('h1');
        title.innerText = title;
        let content = document.createElement('p');
        content.innerText = Text;

        modal.appendChild=(closebutton);
        modal.appendChild=(title);
        modal.appendChild=(content);
        mcontainer.appendChild(modal);
        mcontainer.classList.add('is-visible');
      }
        document.querySelector('#show modal').addEventListener('click'), () => {
          showmodal('modal title','this is a modal');
      }
        //hiding the modal.
      function hidemodal(){
        let mcontainer = document.querySelector('modalcontainer');
        mcontainer.classlist.remove('is-visible');
      }

       let closebutton = document.createElement('closebutton');
       closebutton.classlist.add('modal-close');
       closebutton.innerText = 'close';
       closebutton.addEventListener('click',hidemodal);

      //escape button closes modal.
       window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();  
        }
      });
      modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });
      //displaying properties of the pokemon.
      function displayPropertiesofpokemon(pokemon, button) {
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
      } 

      
      
        
  //---------------------Loop for pokemon list begins.---------------------
  //for (let i = 0; i < pokemonlist.length; i++)
   //  {
    //  let pokemon = pokemonlist[i];
    //  let pokemontype = pokemonlist[i].type;
    //  let pokemonheight = pokemonlist[i].height;
    //  let pokemonrarity = pokemonlist[i].rarity;
     // let html = `<br>${pokemon.name}-<br>
     //               [${pokemontype}]:<br>
     //               ${pokemonheight},
     //               ${
     //                 pokemonrarity = Legendary
     //               ? `Rarity: ${pokemonrarity} -Oh! a legendary`
     //               : `Rarity: ${pokemonrarity}.`
     //                }`;
                    
                     
      //document.write(html);
    //}
