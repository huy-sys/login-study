import React, { useEffect, useState } from 'react';
import './LoginTodo.css'
import { useNavigate } from 'react-router-dom';

function LoginTodo() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        // Set isLoggedIn to true in localStorage
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home");
      } else {
        alert("Tên người dùng hoặc mật khẩu không chính xác!");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again later.");
    }
  };
  return (
    <div className='loginContainer'>
      <h2>Đăng nhập</h2>
      <form className='loginForm' onSubmit={handleLogin}>
        <label>Tên người dùng:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
        <label>Mật khẩu:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default LoginTodo;