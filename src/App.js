import React, { useState } from "react";
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
//REACT FUNCTIONAL COMPONENT
const MyInfoComponent = () => {
  // USE STATE IS NEEDED FOR VARIABLE
  // VARIABLE | TAKES IN A FUNCTION
  const [myAge, setMyAge] = useState(0);
  const [myFavoriteColor, setMyFavoriteColor] = useState();
  const [myName, setMyName] = useState();
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const favoriteMoviesArray = [];
  return (
    <div>
      <p>My name is: {myName}</p>
      <p>My favorite color is {myFavoriteColor}</p>

      <p>I am {myAge} years old</p>
      <p style={{ backgroundColor: myFavoriteColor }}>{myFavoriteColor}</p>
      <div>
        <button
          onClick={() => {
            setMyAge(myAge + 1);
            console.log(setMyAge);
          }}
        >
          AGE +
        </button>
      </div>
      <input
        type="text"
        placeholder="COLOR INPUT"
        onChange={(e) => {
          const value = e.target.value;
          setMyFavoriteColor(value);
          console.log(value);
        }}
      ></input>
      <div>
        <input
          type="text"
          placeholder="INPUT NAME"
          onChange={(e) => {
            const value = e.target.value;
            setMyName(value);
            console.log(value);
          }}
        ></input>
        <h3>My favorite movies are: </h3>
        <ul>
         <li>{favoriteMovies[0]}</li>
         <li>{favoriteMovies[1]}</li>
         <li>{favoriteMovies[2]}</li>
          </ul>
        <div>
          <input
            type="text"
            placeholder="MOVIE 1"
            onChange={(event) => {
              favoriteMoviesArray[0] = event.target.value;
              setFavoriteMovies(favoriteMoviesArray);
            }}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="MOVIE 2"
            onChange={(event) => {
              favoriteMoviesArray[1] = event.target.value;
              setFavoriteMovies(favoriteMoviesArray);
            }}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="MOVIE 3"
            onChange={(event) => {
              favoriteMoviesArray[2] = event.target.value;
              setFavoriteMovies(favoriteMoviesArray);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default App;
