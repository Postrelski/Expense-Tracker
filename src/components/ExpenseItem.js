import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

// Components are JS functions!
// This is the basic skeleton for React componenets
// The function will return some HTML code
// then we export the function.

// Must use 'className' instead of 'class'
// And you must import the CSS file into the componenet

// To place variables inside JSX code we must use curly brackets "{}"
