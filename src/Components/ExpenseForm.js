import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm() {
    const [expenses, setExpenses] = useState([]);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleAddExpense = () => {
        const newExpense = {
            title: title,
            amount: amount,
            date: date
        };

        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <div>
            <div className='form'>
                <label htmlFor="titleInput">Title</label>
                <input
                    type="text" id="titleInput" placeholder="Enter the expense title" value={title} onChange={handleTitleChange} />

                <label htmlFor="amountInput">Amount</label>
                <input type="text" id="amountInput" placeholder="Enter the expense amount" value={amount} onChange={handleAmountChange} />

                <label htmlFor="dateInput">Date</label>
                <input type="text" id="dateInput" placeholder="Enter the expense date" value={date} onChange={handleDateChange} />


                <button className="AddButton" onClick={handleAddExpense}>Add Expense</button>
            </div>

            <div className='expenses'>
                <h2>Expenses</h2>
                {expenses.map((expense, index) => (
                    <div key={index}>
                        <p>Title: {expense.title}</p>
                        <p>Amount: {expense.amount}</p>
                        <p>Date: {expense.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
