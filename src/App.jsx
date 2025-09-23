import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [personagem, setPersonagem] = useState(null)

  const soma1 = () => {
    if (count + 1 <= 826) {
      setCount(count + 1)
    } else {
      setCount(1)
    }
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${count}`)
      .then(res => res.json())
      .then(data => setPersonagem(data))
      .catch(err => console.error("Erro ao buscar personagem:", err))
  }, [count])

  return (
    <div className='site'>
      {personagem && (
        <>
          <img src={personagem.image} alt={personagem.name} />
          <h2>{personagem.name}</h2>
          <p><strong>Status:</strong> {personagem.status}</p>
          <p><strong>species:</strong> {personagem.species}</p>
          <p><strong>Gender:</strong> {personagem.gender}</p>
          <p><strong>Último ep:</strong> Ep. {personagem.episode.length}</p>
        </>
      )}

      <button onClick={() => {
        soma1()
        console.log(count)}}>
        Trocar de personagem
      </button>
    </div>
  )
}

export default App;
