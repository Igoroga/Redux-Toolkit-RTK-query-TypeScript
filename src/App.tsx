import React, { useEffect } from 'react';
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { userSlice } from './store/reducers/UserSlice'
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
    const {count, users, isLoading, error} = useAppSelector(store => store.userReducer)
    const {increment} = userSlice.actions; 
    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(fetchUsers())
      console.log(error);
      
    }, []);

    if(isLoading){
      return (
        <div>Loading</div>
      )
    }

    if(error){
      return (
        <div>{error}</div>
      )
    }
    
  return (
    <>
        <div className="card">
        <button style={{background:'orange'}} onClick={() => dispatch(increment(1))}>
          count is {count}
        </button>
        {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
       </div>
        </>
  )
}

export default App
