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
  ];

  //---------------------Loop for pokemon list begins.---------------------

    for (let i = 0; i < pokemonlist.length; i++)
     {
      let pokemon = pokemonlist[i];
      let pokemontype = pokemonlist[i].type;
      let pokemonheight = pokemonlist[i].height;
      let pokemonrarity = pokemonlist[i].rarity;
      let html = `<br>${pokemon.name}-<br>
                    [${pokemontype}]:<br>
                    ${pokemonheight},
                    ${
                      pokemonrarity = Legendary
                    ? `Rarity: ${pokemonrarity} -Oh! a legendary`
                    : `Rarity: ${pokemonrarity}.`
                     }`;
                    
                     
      document.write(html);
    }
