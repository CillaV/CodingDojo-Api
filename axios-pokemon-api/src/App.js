import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  
  // const [ pokemon, setPokemon ] = useState({});

  const [ pokemonArr, setPokemonArr ] = useState([]);

  // const [ pokemonNumber, setPokemonNumber ] = useState(1);
  
  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon?limit=898`)
  //   .then((res) => {
  //     console.log(res);
  //     return res.json();
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     return setPokemonArr(res.results);
  //   })
  //   .catch((err) => console.log(err))
  //   }, [])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=898`)
    
    .then((res) => {
      console.log(res);
      console.log(res.data)
      console.log(res.data.results)
      return setPokemonArr(res.data.results);
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
