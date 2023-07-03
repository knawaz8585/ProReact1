import React from 'react'

export default function ExpenseDetails(props) {
    return (
        <div>

            <h2> {props.title}</h2>
            {props.Amount}
            {props.LocationOfExpenditure}
        </div>
    )
}
