import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import JP from "./components/JP";
import CH from "./components/CH";
import HomePage from "./components/HomePage";
import { AnimatePresence } from "framer-motion";
import About from './components/About';

function App() {
  return (
    <AnimatePresence>
        <div className="App">
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/about" element={ <About /> } />
          </Routes>
        </div>
    </AnimatePresence>

  );
}


window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

export default App;