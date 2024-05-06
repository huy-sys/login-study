import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginTodo from './LoginTodo';
import TodoList from './TodoList';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginTodo />} />
          <Route path="/home" element={<TodoList />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
