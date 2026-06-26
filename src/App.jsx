
import { useEffect, useRef, useState } from 'react'
import './assets/css/App.css'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

function App() {
  const [todoList, setTodoList] = useState([])
  const isFetched = useRef(false)

  // [
  //   {
  //     id: 123,
  //     text: 'Lorem',
  //     isDone: false
  //   }
  // ]

  const getRandID = () => {
    return Math.ceil(Math.random() * (9999 - 1000) + 1000)
  }

  const addHendler = (text) => {
    if (todoList.find(el => el.text === text)) return false
    const newList = [...todoList]
    newList.push({
      id: getRandID(),
      text: text,
      isDone: false
    })

    localStorage.setItem('todoList', JSON.stringify(newList))
    setTodoList(newList)
    return true
  }

  const actionHendler = (id, action) => {
    const newList = [...todoList]
    const index = newList.findIndex(el => el.id === id)
    switch (action) {
      case 'setDone':
        newList[index].isDone = true
        break;

      case 'delete':
        if (confirm('delete item?'))
          newList.splice(index, 1)
        break;

      case 'copy':
        newList.push({
          id: getRandID(),
          text: newList[index].text + ' (copy)',
          isDone: false
        })
        break;
    }

    localStorage.setItem('todoList', JSON.stringify(newList))
    setTodoList(newList)
  }

  const fetchTodos = async () => {
    const resp = await fetch('/mocks/todos.js')
    const data = await resp.json()
    setTodoList(data)
  }

  useEffect(() => {
    if (!isFetched.current) {
      isFetched.current = true
      console.log('use');
      
      fetchTodos()
    }

  }, [])


  return (

    <div className='container'>

      <ToDoForm onAdd={addHendler} />

      <ToDoList
        list={todoList}
        onAction={actionHendler}
      />
    </div>

  )
}

export default App
