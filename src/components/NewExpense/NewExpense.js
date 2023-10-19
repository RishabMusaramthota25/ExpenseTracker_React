import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setShowingForm(false);
  };
  const[showingForm, setShowingForm]=useState(false);
  const startEditingHandler = () =>{
    setShowingForm(true);

  }
  const stopEditingHandler = () =>{
    setShowingForm(false);

  }


  return (
    <div className='new-expense'>
      {!showingForm && <button onClick={startEditingHandler}>Add New Expense</button>}
      
      {showingForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpenses;