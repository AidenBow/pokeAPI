import axios from "axios"

import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import PokemonList from "./components/PokemonList"
import Headers from "./components/Headers"
function App() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      console.log(res)
    })

  return (
    <div className="App">
      <Headers />
      <PokemonList />
    </div>
  );
}

export default App;
