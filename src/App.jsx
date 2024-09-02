import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Library from './components/Library';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/library'>Library</Link>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/library' element={<Library/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
