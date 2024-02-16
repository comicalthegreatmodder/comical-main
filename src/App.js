import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import JP from "./components/JP";
import CH from "./components/CH";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<p>this is the home page</p>} />
            <Route path="/JP" element={<JP />} />
            <Route path="/CH" element={<CH />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>

  );
}

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

export default App;