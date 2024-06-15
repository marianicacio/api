import axios from "axios"
import React, {useState} from "react"

export default function GetCep() {

  const [cep, setCep ] = useState("")
  const [adress, setAddress] = useState("")
  

  async function handleCep() {
    try {
      const reponse = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      setAddress(reponse.data)
    } catch (err) {
        console.log(err)
      }
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: '15px'
    }}>
      <h1>Busque seu cep</h1>
      <input type="text" onChange={(e) => setCep(e.target.value)}/>
      <button type="button" onClick={handleCep}>Buscar</button>

      {
        adress && 

        <div>

          <p>{adress.logradouro}</p>
          <p>{adress.bairro}</p>
          <p>{adress.ddd}</p>

        </div>
      }
    </div>
  )
}