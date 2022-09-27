import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseItem } from '../../UseSpreadOpeartor';
import { addBook } from './store/BookSlice';

const Example14 = () => {

    const[enterTitle,setEnterTitle] = useState('');
    const[enterAmount,setEnterAmount] = useState('');
    const[enterDate,setEnterDate] = useState('');  

    const data = useSelector((state) => state.books);
    console.log(data)

    const dispatch = useDispatch();
    
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
            id : Math.random(),
            title :enterTitle,
            amount:Number(enterAmount),
            date: new Date(enterDate)
        }
        
        dispatch(addBook(expenseData));

        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('')
     }

     


  return (
    <>
    <form onSubmit={submitHandler} >
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
    <ul className='expenses-list'>
    {
           data.map((i)=><ExpenseItem title={i.title} amount={i.amount} date={i.date} key={Number(i.id)}/>)
    }
   </ul>
    </>
  )
}

export {Example14}