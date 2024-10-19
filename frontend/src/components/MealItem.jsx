import React, { useContext } from "react";
import { currencyFormatter } from "../util/formatter.js";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const handleAddItem = () => {
    cartCtx.addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <Button onClick={handleAddItem}>Add to Cart</Button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
