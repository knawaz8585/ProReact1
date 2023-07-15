
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



onAmount = { handleAmountUpdate }



const amountupdate = () => {
    props.onAmount(props.id)
};

<button onClick={amountupdate}>Update Amount</button>