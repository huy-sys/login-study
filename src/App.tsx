import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginTodo from './LoginTodo';
import TodoList from './TodoList';
import DetailPage from './DetailItem';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginTodo />} />
          <Route path="/home" element={<TodoList />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
