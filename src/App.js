import React, { useState } from 'react';
import ConditionStatement from './components/ConditionStatement';
import PropsFromChildToParent from './components/PropsFromChildToParent';
import PropsFromParentToChild from './components/PropsFromParentToChild';
import { AddExpense, ExpenseList } from './components/UseSpreadOpeartor';
import Main from './components/Hooks/Main';
import RouterMain from './components/Router/Main';
import Example1 from './components/Redux/ReduxEx1/Example1';
import Example2 from './components/Redux/ReduxEx1/Example2';
import Example11 from './components/Redux/ReduxEx2/Example11';
import Example12 from './components/Redux/ReduxEx2/Example12';
import {Example13} from './components/Redux/ReduxEx2/Example13';
import {Example14} from './components/Redux/ReduxEx2/Example14';

function App() {

  // child to parent

  const [data,setData] = useState();
  const onchangeTextDateHandler= (updateText) => {
    setData(updateText);
  }

  // use spread opeator 
  const INTIAL_Expenses = [
    {
      id:1,
      title : 'Car Insurance',
      amount : 10000,
      date : new Date(2020,4,23)
    },
  ]

  const[newExpenses, setExpenses] = useState(INTIAL_Expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense)=>{
      return [expense,...prevExpense];
    })
  }

  console.log(newExpenses);

  return (
    // use fragments tags 
    <>
    <RouterMain/>
   
    <h2>--------------------------------------------------------------------------------------------------------------------</h2>
    
    <div className='row'>
      <PropsFromChildToParent onchangeTextData={onchangeTextDateHandler}/>
      <h5 style={{marginLeft:'20px'}}> Result In Parent from child  :  {data} </h5>
    </div>

    <h2>-------------------------------------------------------------------------------------------------------------------</h2>

    <PropsFromParentToChild updateText={data}/>

    <h2>-------------------------------------------------------------------------------------------------------------------</h2>

    <ConditionStatement status={"valid"}/>

    <h2>-------------------------------------------------------------------------------------------------------------------</h2>
    
    <AddExpense onAddExpense={addExpenseHandler}/> 
    <ExpenseList item={newExpenses}/>

    <h2>------------------------------------------------------------------------------------------------------------------</h2>

    <Main/>

    {/* redux Example1 */}

    <Example1/>
    <Example2/>

    <h2>------------------------------------------------------------------------------------------------------------------</h2>
    {/* redux toolkit Example1 */}
    <Example11/>
    <Example12/>
    <Example13/>
    <Example14/>

    </>

  );
}

export default App;
