import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './style.css'




function ToDoItem (props){

    

    

const {taskDetails,toDoDelete,toDoEdit,updateTaskStatus} = props;
const {taskText,id,status} = taskDetails;


const onClickDelete = ()=>{
    toDoDelete(id);
}


const onClickCheckBox = ()=>{
    const newStatus = status==='incomplete'?'completed':'incomplete';
    updateTaskStatus(id,newStatus);
}



const onClickEdit = ()=>{
    toDoEdit(taskDetails)
}
    return (

        <li className='ToDoItem'>
            <input 
                type="checkbox" 
                
                id={id}
                className='checkBox' 
                onChange={onClickCheckBox}
            />
            <label htmlFor={id}>{taskText}</label>
            <button 
                className='edit-btn'
                onClick={onClickEdit}
            ><FontAwesomeIcon icon={faPenToSquare} /></button>
            <button 
                
                className='dlt-btn'
                onClick={onClickDelete}
                
            ><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
            <span>{status}</span>
            
        </li>
    );
}

export default ToDoItem;