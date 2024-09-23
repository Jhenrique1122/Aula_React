import { useState } from "react"

function App() {
  const [value, setValue] = useState('')
  const [list, setList] = useState(['React', 'Node', 'Vue'])

  function handleInputValue(event) {
    setValue(event.target.value)
  }

  function handleList() {
    setList([...list, value])
    setValue('')
  }


return (
  <>
    <h1>Lista de Tecnologias</h1>

    <div>
      <input type="text" value={value} onChange={(event) => handleInputValue(event)} />

      <button onClick={() => handleList()}>Adicionar</button>
      <span>{value}</span>
    </div>

    <div>
      <ul>
        {list.map(item => (<li key={item}>{item}</li>))}
      </ul>
    </div>
  </>
)
}

export { App }
