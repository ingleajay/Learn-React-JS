import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  return (
    <div>home Page...</div>
  )
}

const About = () => {

    // use to navigate and go back functionality provided
    const navigate = useNavigate();

    const goToHome = () =>{
        navigate("/");
    }

    const goToback = () => {
        navigate(-1);
    }

    return (
      <div>
        About Page...
        <button onClick={goToHome}>Cike here to go home</button>
        <button onClick={goToback}>Cike here to go back</button>
      </div>
    )
  }

 const Error = () => {
    return(
        <>
        <h2>Error...</h2>
        </>
    )
 } 

export {Home,About,Error}