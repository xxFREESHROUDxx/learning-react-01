import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from '../Expenses/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [newTitle, setNewTitle] = useState('');

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(newTitle);
  };

  const changeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>${props.amount}</div>
      {/* <input
        type='text'
        value={newTitle}
        onChange={changeHandler}
        placeholder='Enter Title'
      />
      <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
