import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='site'>
      <img src="https://tm.ibxk.com.br/2022/11/22/22143022553305.jpg" alt="Rick" />

      <h2>Rick</h2>
      <p><strong>status:</strong>Vivinho</p>
      <p><strong>Especie:</strong>Humano</p>
      <p><strong>Genero:</strong>Masculino</p>
      <p><strong>Ultimo ep:</strong> Ep. 41</p>
    
    </div>
  )
}

export default App
;