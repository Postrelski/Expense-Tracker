import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startUp = <button onClick={formVisible}>Add New Expense</button>;
  const [html, setHTML] = useState(startUp);

  function stopEditingHandler() {
    setHTML(startUp);
  }
  function formVisible() {
    setHTML(
      <div>
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      </div>
    );
  }

  return <div className="new-expense">{html}</div>;
};

export default NewExpense;

// "onSaveExpenseData" start with on to describe that a function is triggered on this componenet. This is a convention
