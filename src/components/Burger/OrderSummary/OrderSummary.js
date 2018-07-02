import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A awesome burger with the following ingredients:</p>
      <ul>
      {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
      <p>Contined to Checkout?</p>
      <Button clicked={props.purchaseCanceled} btnType='Danger'>CANCEL</Button>
      <Button clicked={props.purchaseContinued} btnType='Success'>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
