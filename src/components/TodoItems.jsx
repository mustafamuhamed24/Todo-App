import React, { useState, useRef, useEffect } from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';
import edit_icon from '../assets/edit.png';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);
    const inputRef = useRef(null);

    // Focus the input field when editing starts
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    // Handle saving the edit
    const handleSave = () => {
        if (editedText.trim() === "") {
            return; // Prevent saving empty text
        }
        editTodo(id, editedText); // Save the edited text
        setIsEditing(false); // Exit edit mode
    };

    // Handle key press (e.g., pressing "Enter" to save)
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        }
    };

    // Handle clicking outside the input field to save
    const handleBlur = () => {
        handleSave();
    };

    return (
        <div className='flex items-center my-3 gap-2'>
            <div className='flex flex-1 items-center cursor-pointer'>
                <img onClick={() => toggle(id)} className='w-7' src={isComplete ? tick : not_tick} alt="" />
                {isEditing ? (
                    <input
                        ref={inputRef}
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        onBlur={handleBlur}
                        className='ml-4 text-[17px] text-slate-700 bg-transparent border-b-2 border-slate-500 outline-none'
                    />
                ) : (
                    <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
                        {text}
                    </p>
                )}
            </div>

            <img
                onClick={() => {
                    if (isEditing) {
                        handleSave(); 
                    } else {
                        setIsEditing(true); 
                    }
                }}
                src={edit_icon}
                className='w-5 h-5 cursor-pointer'
                alt=""
            />
            <img
                onClick={() => deleteTodo(id)}
                src={delete_icon}
                className='w-4 h-5 cursor-pointer'
                alt=""
            />
        </div>
    );
};

export default TodoItems;