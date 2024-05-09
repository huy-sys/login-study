import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
function DetailPage() {
    // const [text, setText] = useState(todo.text);
    const navigate = useNavigate();
    const handleSave = () => {
        // Save the changes to the todo item
        // For simplicity, let's just log the changes

        // Navigate back to the home page after saving
        navigate("/");
    };
    return (
        <div>
            <h2>Edit Todo Item</h2>
            {/* <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            /> */}
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default DetailPage;