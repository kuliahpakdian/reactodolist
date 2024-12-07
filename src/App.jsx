import { useState } from 'react'
import TodoList from "./components/TodoList";
import Header from './components/Header';
import './App.css'

export default function App() {
  const [isRefresh, setIsRefresh] = useState(true)

  function setRefresh (status) {
    setIsRefresh(status)
  }

  return (
    <div className="App">
      <div className="content">
        <Header setRefresh={setRefresh} />
        <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
      </div>
    </div>
  )
}

