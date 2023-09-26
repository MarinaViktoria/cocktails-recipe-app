import { useState, useEffect } from 'react';
import './App.css';
import video from './cocktail-holiday.mp4';
import audio from './music.mp3';
import MyCocktailsKomponent from './MyCocktailsKomponent';

function App() {
  const MY_ID = "7f05e9a1";
  const MY_KEY = "9d711c11df64e5935baca9496984fd61";
  const [mySearch, setMySearch] = useState("");
  const [myCocktails, setMyCocktails] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("")

  useEffect(() => {
    const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setMyCocktails(data.hits)
    }
      getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    console.log(e.target.value);
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }
  return (
    <div className="App">
      <audio autoPlay="allowed" loop>
        <source src={audio} type="audio/mp3"/>
      </audio>
      <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
      <div className="container">
        <h1>Find a recipe of your favourite cocktail!!!</h1>
      </div>
      <div className="container">
        <form onSubmit={finalSearch}>
          <input type="text" className="search" placeholder="Search..." 
          onChange={myRecipeSearch} value={mySearch}/>
        </form>
        <button onClick={finalSearch}> 
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
        </button>
      </div>
      {myCocktails.map((element,index) => (
        <MyCocktailsKomponent key={index}
        label={element.recipe.label}
        image={element.recipe.image}
        ingredients={element.recipe.ingredientLines}
        calories={element.recipe.calories}
        />
      ))}
</div>
  )}
export default App;
