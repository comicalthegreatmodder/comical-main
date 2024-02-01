import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="progress" ></div>
        
        {/* <div class="cube-wrap">
          <div class="cube">
            <div class="side top">wsgmaniga</div>
            <div class="side bottom">wsgmaniga</div>
            <div class="side front">wsgmaniga</div>
            <div class="side back">wsgmaniga</div>
            <div class="side left">wsgmaniga</div>
            <div class="side right">wsgmaniga</div>
          </div>
        </div> */}
      </header>
    </div>
  );
}

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

export default App;
