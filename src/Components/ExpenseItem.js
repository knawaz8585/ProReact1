import React from 'react'
import './ExpenseItem.css';

export default function ExpenseItem(props) {


    return (
        <div className='expense-item'>
            <div>{props.Date.toISOString()}</div>
            <div className='expense-item_description'>
                <h2>{props.Title}</h2>
                <div className='expense-item_price'>{props.Amount}</div>
                <div className="expense-Expenditure">{props.LocationOfExpenditure}</div>
            </div>
        </div>
    )
}
