
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './component/PlayersList';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;
