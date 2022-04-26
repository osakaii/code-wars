import "./App.css";
import Grid from "./components/Grid/Grid";
import ParticlesWrapper from "./components/Particles/ParticlesWrapper";

function App() {
  return (
    <div className="App">
      <ParticlesWrapper />
      <div className="App__content">
        <h1 className="App__h1">CodeWars Stats</h1>
        <Grid />
      </div>
    </div>
  );
}

export default App;
