import ExpenseItem from "./Components/ExpenseItem";
import React, { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: 'Car Insurance',
      Amount: 2200,
      Date: new Date(2023, 7, 2),
      LocationOfExpenditure: 'Suraksha'
    },
    {
      id: 2,
      title: "Food",
      Amount: 15000,
      Date: new Date(2023, 7, 15),
      LocationOfExpenditure: "For Living"
    },
    {
      id: 3,
      title: "Building-Maintain",
      Amount: 5000,
      Date: new Date(2023, 7, 1),
      LocationOfExpenditure: "For Living"
    },
    {
      id: 4,
      title: "Travelling",
      Amount: 3000,
      Date: new Date(2023, 7, 1),
      LocationOfExpenditure: "Going to Job"
    }
  ]);

  const handleDeleteExpense = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  const handleAmountUpdate = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) => {
        if (expense.id === expenseId) {
          return { ...expense, Amount: "$" + 100 };
        }
        return expense;
      })
    );
  };


  const handleTitleChange = (expenseId, newTitle) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) => {
        if (expense.id === expenseId) {
          return { ...expense, title: newTitle };
        }
        return expense;
      })
    );
  };

  return (
    <>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          Amount={expense.Amount}
          Date={expense.Date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
          onDelete={handleDeleteExpense}
          onAmount={handleAmountUpdate}
          onTitleChange={handleTitleChange}
        />
      ))}
    </>
  );
}

export default App;
