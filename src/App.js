import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyInfoComponent />
      </header>
    </div>
  );
}

function MyInfoComponent() {
  const myName = "SONNY";
  const myFavoriteColor = "BLACK";
  const favoriteMovies = ["GOD FATHER", "GODFELLAS", "JAWS"]
  return (
    <div>
      <p>My name is {myName}</p>
       <p>My favorite color is {myFavoriteColor}</p>
       {favoriteMovies.map(favoriteMovies => <h2>{favoriteMovies}</h2>)}
    </div>
  );
}

export default App;
