import React, { useState } from "react"
import axios from "axios"

export default function App() {

  const [pokemon, setPokemon] = useState("")
  const [pokedex, setPokedex] = useState("")

  async function handlePokemon() {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      setPokedex(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div style={{
      display:"flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px"
      }}>
        <h1>Pegue seu pokemon pelo nome</h1>
        <input type="text" onChange={(e) => setPokemon(e.target.value)}/>
        <button type="button" onClick={handlePokemon}>Pokemon eu escolho você!</button>
      </div>

      {
        pokedex && 

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px"
        }}>
          <p>{pokedex.name}</p>
          <img src={pokedex.sprites.front_default} alt="" />
          <img src={pokedex.sprites.front_shiny} alt="" />
        </div>

      }

    </div>
  )

}