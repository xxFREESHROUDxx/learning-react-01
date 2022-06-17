import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    date: new Date(2022, 3, 9),
    title: 'School Fee',
    amount: 300,
  },
  {
    id: 'e2',
    date: new Date(2022, 2, 16),
    title: 'Hostel Fee',
    amount: 500,
  },
  {
    id: 'e3',
    date: new Date(2022, 1, 16),
    title: 'Books',
    amount: 230,
  },
  {
    id: 'e4',
    date: new Date(2022, 2, 12),
    title: 'House Rent',
    amount: 700,
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
    console.log(updatedExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
