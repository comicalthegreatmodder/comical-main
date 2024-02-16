import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {
  Jordanp
} from "./components/Jordanp";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/">
              <p>this is the home page</p>
            </Route>
            <Route path="/JP">
              <Jordanp />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
    
  );
}

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

export default App;
