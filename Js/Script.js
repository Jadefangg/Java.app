let pokemonrespository=(function(){
let pokemonlist = 
[
    {//object1
    rarity: "Legendary",
    name: "Lugia",
    type: ["Psychic", "Flying"],
    weight: "211",  //kg
    height: "17",  //feet
    
    },
    {//object2
      rarity: "Legendary",
      name: "Ho-oh",
      type: ["Fire","Flying"],
      weight: "200",  //kg    
      height: "12",   //feet

    },
  {//object3
        rarity: "Legendary",
        name: "Celebi",
        type: "Psychic,Grass",
        weight: "5",    //kg
        height: "2",    //feet

  },
    {//object4
        rarity: "Normal",
        name:"Pikachu",
        type:"Electric",
        weight:"1", //kg
        height:"6", //feet
 
    }
  ]});
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
