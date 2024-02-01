import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="cube-wrap">
          <div class="cube">
            <div class="side top"></div>
            <div class="side bottom"></div>
            <div class="side front"></div>
            <div class="side back"></div>
            <div class="side left"></div>
            <div class="side right"></div>
          </div>
        </div>
        <script>
          window.addEventListener('scroll', () => {
            document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
          }, false);
        </script>
      </header>
    </div>
  );
}

export default App;
