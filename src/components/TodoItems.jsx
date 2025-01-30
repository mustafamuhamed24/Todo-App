import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex iterms-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isComplete ? tick : not_tick} alt="" srcset="" />
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 
            ${isComplete ? "line-through" : ""}`}>
                {text}</p>
        </div>

        <img onClick={()=>{deleteTodo(id)}} src={delete_icon} className='w-4 h-5 cursor-pointer' alt="" />
    </div>
  )
}

export default TodoItems 