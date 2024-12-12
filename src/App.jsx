import { useState } from 'react'
import './components/style.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {
 
  return (
    <>
      <div className='Header'>
        <Header/>
      </div>
      
      <div className="ToDoList">
        <ToDoList/>
      </div>
      
    </>
  )
}

export default App
