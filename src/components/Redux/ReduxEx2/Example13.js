import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, STATUS } from './store/ShowUserSlice';
import { add, remove } from './store/WorkWithAPI';

const Example13 = () => {

   // const [users,setUsers] = useState([]);
   const {data:users,status}= useSelector((state)=>state.show_users);
   console.log(status);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers())
        // const fetchUsers = async () => {
        //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
        //     const data = await res.json();
        //     console.log(data);
        //     setUsers(data);
        // };

        // fetchUsers();
     },[]);

  const addUser = (user) => {
        dispatch(add(user));
  }   
  
  if(status === STATUS.ERROR){
    return <h4>Something went wrong....</h4>
  }

    return (
        <>
        <div>
            <h4>This are all users : </h4>
            { JSON.stringify(users) !== '{}' &&
                users.map((user)=>(
                    <div key={user.id}>
                            <div className='container-fluid'>
                            <h4> {user.id} | {user.name} | {user.email}</h4>
                            <button onClick={()=>addUser(user)}>Add User in Bucket</button>
                            </div>
                    </div>
                ))
            }
        </div>
        <ShowAllAddUser/>
        </>
    )
    
}

const ShowAllAddUser = () => {
    const users = useSelector((state)=>state.add_user);
    const dispatch = useDispatch();

    const removeUser = (id) => {
        dispatch(remove(id));
    }

    return (
        <div>
        <h4>This are all Added Users : </h4>
        {
            users.map((user)=>(
                <div key={user.id}>
                        <div className='container-fluid'>
                        <h4> {user.id} | {user.name} | {user.email}</h4>
                        <button onClick={()=>removeUser(user.id)}>Remove User from Bucket</button>
                        </div>
                </div>
            ))
        }
    </div>
    )
}

export  {Example13,ShowAllAddUser}