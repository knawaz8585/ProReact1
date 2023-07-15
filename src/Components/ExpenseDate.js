import React from 'react'


export default function ExpenseDate(props) {
    const month = props.Date.toLocaleString('en-US', { month: 'long' });
    const day = props.Date.toLocaleString('en-US', { day: '2-digit' });
    const Year = props.Date.getFullYear();

    return (
        <div>
            <div>{month}-{day}-{Year}</div>
        </div>
    )
}
