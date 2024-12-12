import './style.css'
import ToDoItem from './ToDoItem'
import { useState } from 'react'
import {v4} from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'


function ToDoList(){

    const [newTask,setNewTask] = useState("");


    const [tasks,setTasks] = useState([]);

    
    const HandleDelete = (key) => {
        setTasks(tasks.filter((task)=>(task.id!==key)))   

    }

    const HandleEdit = (taskDetails) => {
        setNewTask(taskDetails.taskText);
        setTasks(tasks.filter((task)=>(task.id!==taskDetails.id)))
    }


    const HandleAddInput = () => {
        if(newTask.trim() !== ""){
            const Task = {
                id:v4(),
                taskText:newTask,
                status:'incomplete'
            };
            setTasks(t => [...t,Task])
            
            
            setNewTask("")
        }
      
    }

    const HandleKeyDown = (e) => {
        if(e.key === 'Enter'){
            HandleAddInput();
        }
    }

    const updateTaskStatus = (id,newStatus)=>{
        setTasks(
            tasks.map((task)=>task.id === id?{...task,status:newStatus} : task)
        );
    }

    
    
    return(
        <div className='ToDoList'>

            

            <div className="ToDoContainer">
                <h1>ToDoList</h1>

                <div className='InsertItem'>
                    <input 
                        type="text" 
                        className='InsertText' 
                        placeholder='Enter task'
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        onKeyDown={HandleKeyDown}
                    />
                    <button 
                        className='insert-btn'
                        onClick={HandleAddInput}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>

                </div>

                <ul>
                    {tasks.map((task) => (
                        <ToDoItem 
                            key={task.id} 
                            toDoEdit = {HandleEdit}
                            toDoDelete = {HandleDelete}
                            updateTaskStatus = {updateTaskStatus}
                            taskDetails={task}>
                        </ToDoItem>
                    ))}
                </ul>
            </div>
        
        </div>
    );
}


export default ToDoList;