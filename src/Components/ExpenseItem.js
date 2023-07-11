import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

export default function ExpenseItem(props) {
    const handleDelete = () => {
        props.onDelete(props.id);
    };

    const amountupdate = () => {
        props.onAmount(props.id)
    };

    const handleTitleChange = () => {
        const newTitle = prompt('Enter a new title:');
        if (newTitle !== null && newTitle.trim() !== '') {
            props.onTitleChange(props.id, newTitle);
        }
    };

    return (
        <div className='expense-item'>
            <ExpenseDate Date={props.Date} />
            <div className='expense-item_description'>
                <ExpenseDetails title={props.title} />
            </div>
            <div className='expense-item_price'>
                <ExpenseDetails Amount={props.Amount} />
            </div>
            <div className="expense-Expenditure">
                <ExpenseDetails LocationOfExpenditure={props.LocationOfExpenditure} />
            </div>
            <button onClick={handleDelete}>Delete Expense</button>
            <button onClick={amountupdate}>Update Amount</button>
            <button onClick={handleTitleChange}>Change Title</button>
        </div>
    );
}
