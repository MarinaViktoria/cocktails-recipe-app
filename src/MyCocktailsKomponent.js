function MyCocktailsKomponent(props) {
    return(
        <div>
            <div className="container">
                <h2>{props.label}</h2>;
            </div>
            <div className="container">
                <p><img className="foodOrDrink" src={props.image} alt="cocktail"/></p>
            </div>
            <ul className="container list">
                <p>{props.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
            ))}</p>
            </ul>
            <div className="container">
                <p>{Math.floor(props.calories)} cal</p>
            </div>
        </div>
    )
}
export default MyCocktailsKomponent;