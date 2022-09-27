import React, { useState } from 'react'

const UseSpreadOpeartor = (props) => {

    const[enterTitle,setEnterTitle] = useState('');
    const[enterAmount,setEnterAmount] = useState('');
    const[enterDate,setEnterDate] = useState('');  
    
    const titleHandler = (event) => {
        setEnterTitle(event.target.value);
    }
    
    const AmountHandler = (event) => {
        setEnterAmount(event.target.value);
     }
    
     const DateHandler = (event) => {
        setEnterDate(event.target.value);
     }
    
    
    const submitHandler = (event) => {
        // this is for prevent refresh to page when form is submitting 
        event.preventDefault();
        const expenseData = {
            title :enterTitle,
            amount:Number(enterAmount),
            date: new Date(enterDate)
        }
        // child to parent comp
        props.onSaveExpenseData(expenseData);
        
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('')
     }
    
      return (
       <>
        <form onSubmit={submitHandler}>
            <h5>Use Spread Opeartor...</h5>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleHandler} value={enterTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"  onChange={AmountHandler} value={enterAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' onChange={DateHandler} value={enterDate}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
       </>
      )
}

const AddExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData)=> {
        const expenseData = {
          ...enteredExpenseData,
          id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
      };

     return(
        <>
            <UseSpreadOpeartor onSaveExpenseData={saveExpenseDataHandler} /> 
        </>
     ) 
}

const ExpenseList = (props) => {
    if(props.item.length === 0){
        return <h2 className='expenses-list__fallback'>No Expenses available</h2>;
    }
    
  return (
   <ul className='expenses-list'>
    {
           props.item.map((i)=><ExpenseItem title={i.title} amount={i.amount} date={i.date} key={Number(i.id)}/>)
    }
   </ul>
  )
}

const ExpenseItem = (props) => {
    const month = props.date.toLocaleString('en-US',{month : 'long'});
    const day = props.date.toLocaleString('en-US',{day : '2-digit'});
    const year = props.date.getFullYear();
    return (
            <div className='expense-item__description'>
               <p>{props.title} || {props.amount} || {day}/{month}/{year}</p> 
            </div>
    );
}


export {UseSpreadOpeartor,AddExpense , ExpenseList,ExpenseItem};