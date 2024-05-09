import React, { useState } from 'react'
import { Todo } from './inteface'
import './TodoItem.css'
import { useNavigate } from "react-router-dom";

interface TodoItemProps {
    todo: Todo;
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
}

function TodoItem({ todo, onDelete, onEdit }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const navigate = useNavigate();
    
    // Kiểm tra xem có edit hay không
    const handleEdit = () => {
        setIsEditing(true);
        navigate(`/detail/${todo.id}`);
    };

    // Action cancel sẽ set check edit và để state là text hiện tại
    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditText(todo.text);
    };

    const handleSaveEdit = () => {
        setIsEditing(false);
        onEdit(todo.id, editText);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditText(e.target.value);
    };

    return (
        <div className="todo-item">
            {isEditing ? (
                <>

                    <input type="text" value={editText} onChange={handleChange} />
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                </>
            )}
        </div>
    );
}

export default TodoItem;