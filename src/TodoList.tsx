import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'
import useTodo from './useTodo';
import { useNavigate } from 'react-router-dom';


function TodoList() {
    const { todos, inputText, handleInputChange, handleAddTodo, handleDeleteTodo, handleEditTodo } = useTodo()
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [navigate]);

    const handleLogout = () => {
        // Clear isLoggedIn from localStorage
        localStorage.removeItem("isLoggedIn");
        // Navigate to the login page
        navigate('/');
    };
    return (
        <div className="todo-list-container">
            <button onClick={handleLogout}>Đăng xuất</button>
            <h1>Todo List</h1>
            <input
                type="text"
                className="todo-input"
                value={inputText}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul className="todo-list">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={handleDeleteTodo}
                        onEdit={handleEditTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;