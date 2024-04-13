import omeletteImage from "./assets/images/image-omelette.jpeg";
import "./App.css";
const App = () => {
  return (
    <div className="main">
      <div>
        {/* Use the class name from the imported CSS module */}
        <img src={omeletteImage} alt="omelette image" className="img-size" />
      </div>
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <div className="container">
        <h3>Preparation Time</h3>

        <ul>
          <li>
            <span> Total: </span> Approximately 10 minutes
          </li>
          <li>
            <span> Preparation: </span>5 minutes
          </li>
          <li>
            <span>Cooking: </span> 5 minutes
          </li>
        </ul>
      </div>

      <h2>Ingredients</h2>
      <div className="2nd-container">
        <ul>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillins: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </div>
      <hr />

      <h2>Instructions</h2>
      <ol>
        <li>
          <span>Beat the eggs: </span>In a bowl, beat the eggs with a pinch of
          salt and pepper until they are well mixed. You can add a tablespoon of
          water or milk for a fluffier texture.
        </li>
        <li>
          <span>Heat the pan: </span>Place a non-stick frying pan over medium
          heat and add butter or oil.
        </li>
        <li>
          <span>cook the omelette: </span>Once the butter is melted and
          bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
          coat the surface.
        </li>
        <li>
          <span>Add fillins(optional): </span>When the eggs begint to set the
          edges but are still lightly runny in the middle, sprinkle your chosen
          fillings over one half of the omelette.
        </li>
        <li>
          <span>Fold and serve: </span>As the omelette continues to cook,
          carefully lift one edge and fold it over the fillings. Let it cook for
          another minute, then slide it onto a plate.
        </li>
        <li>
          <span>Enjoy: </span>Serve hot, with additional salt and pepper if
          needed.
        </li>
      </ol>
      <hr />

      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <div className="nutrition-facts">
        <div className="fact">
          <span className="label">Calories</span>
          <span className="value">277kcal</span>
        </div>
        <hr />
        <div className="fact">
          <span className="label">Carbs</span>
          <span className="value">78g</span>
        </div>
        <hr />
        <div className="fact">
          <span className="label">Protein</span>
          <span className="value">20g</span>
        </div>
        <hr />
        <div className="fact">
          <span className="label">Fat</span>
          <span className="value">23g</span>
        </div>
      </div>
    </div>
  );
};

export default App;
