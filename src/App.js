import Contacts from "./features/counter/contacts";
import Counter from "./features/counter/Counter";
import Display from "./features/counter/display";
import Home from "./features/counter/home";
import About from "./features/counter/about";
import './app.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    
    <main className="App">
      <div className="wrapper">
        <h1>React-Redux App</h1>
        <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contacts">Contact Us</Link>
              </li>
              <li>
                <Link to="/features/counter/counter">Counter App</Link>
              </li>
              <li>
                <Link to="/features/counter/display">Display App</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contacts' element={< Contacts />}></Route>
                 <Route exact path='/features/counter/counter' element={< Counter />}></Route>
                 <Route exact path='/features/counter/display' element={< Display />}></Route>
          </Routes>
          </div>
       </Router>
      </div>
      {/* <Counter />
      <Display></Display>
      <Home></Home>
      <Contacts></Contacts> */}

    </main>
  );
}

export default App;
