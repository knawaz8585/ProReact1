/*import React from 'react'*/
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

export default function ExpenseItem(props) {


    return (
        <div className='expense-item'>
            <ExpenseDate Date={props.Date} />
            <div className='expense-item_description'>
                <ExpenseDetails title={props.title} /></div>
            <div className='expense-item_price'>
                <ExpenseDetails Amount={props.Amount} />
            </div>
            <div className="expense-Expenditure">
                <ExpenseDetails LocationOfExpenditure={props.LocationOfExpenditure} />
            </div>
        </div>

    )
}
