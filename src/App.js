import ExpenseItem from "./Components/ExpenseItem";
import React, { useState } from 'react';
import ExpenseForm from "./Components/ExpenseForm";


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
  const [selectedYear, setSelectedYear] = useState('');
  const handleYearFilterChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const filteredExpenses = expenses.filter((expense) => {
    if (selectedYear === '') {

      return true;
    }

    return expense.Date.getFullYear() === parseInt(selectedYear);
  });

  return (
    <>
      <select value={selectedYear} onChange={handleYearFilterChange}>
        <option value="">All Years</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
      <ExpenseForm />
      {filteredExpenses.map((expense) => (
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
