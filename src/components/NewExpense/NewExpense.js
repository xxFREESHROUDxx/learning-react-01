import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  // To pass objects or props to parent component
  // Make a function in the parent component and pass that function as a props in child component. Use it to pass /// props to parent component as props.(props name)(props to be passed from child component)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    let expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
