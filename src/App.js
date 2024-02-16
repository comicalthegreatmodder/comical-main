import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Test from "./components/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/">
              <p>this is the home page</p>
            </Route>
            <Route path="/JP">
              <Test />
            </Route>
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
