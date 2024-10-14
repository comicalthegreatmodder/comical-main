import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SnakeGame from './SnakeGame.js'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={ <SnakeGame /> } />
          </Routes>
        </div>
      </BrowserRouter>
  );
}


export default App;