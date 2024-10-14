import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import StandIn from './StandIn.js'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={ <StandIn /> } />
          </Routes>
        </div>
      </BrowserRouter>
  );
}


export default App;