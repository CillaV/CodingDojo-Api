import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  
  // const [ pokemon, setPokemon ] = useState({});

  const [ pokemonArr, setPokemonArr ] = useState([]);

  // const [ pokemonNumber, setPokemonNumber ] = useState(1);
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=898`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => {
      console.log(res);
      return setPokemonArr(res.results);
    })
    .catch((err) => console.log(err))
    }, [])



  


  
  return (
    <div className="App">
      
      {
        pokemonArr.map((poke, index) => {
          return(
            <div key={index}>
              <p>{poke.name}</p>
            </div>
          )
        })
      }




    </div>
  );
}

export default App;
