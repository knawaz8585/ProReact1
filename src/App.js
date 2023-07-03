import ExpenseItem from "./Components/ExpenseItem";


function App() {
  const Expense = [{
    id: 1,
    title: "Car Insuranse",
    Amount: 2200,
    Date: new Date(2023, 7, 2),
    LocationOfExpenditure: "Suraksha"
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
  }]

  return (
    <>
      <ExpenseItem
        title={Expense[0].title}
        Amount={Expense[0].Amount}
        Date={Expense[0].Date}
        LocationOfExpenditure={Expense[0].LocationOfExpenditure} />

      <ExpenseItem
        title={Expense[1].title}
        Amount={Expense[1].Amount}
        Date={Expense[1].Date}
        LocationOfExpenditure={Expense[1].LocationOfExpenditure} />

      <ExpenseItem
        title={Expense[2].title}
        Amount={Expense[2].Amount}
        Date={Expense[2].Date}
        LocationOfExpenditure={Expense[2].LocationOfExpenditure} />

      <ExpenseItem
        title={Expense[3].title}
        Amount={Expense[3].Amount}
        Date={Expense[3].Date}
        LocationOfExpenditure={Expense[3].LocationOfExpenditure} />

    </>
  )

}

export default App;
