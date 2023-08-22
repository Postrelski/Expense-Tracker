import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import "./ExpenseFilter.css";

const Expenses = (props) => {
  const [fitleredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === fitleredYear;
  });

  let expensesContent = <p className="white">No Expenses Found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={fitleredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
