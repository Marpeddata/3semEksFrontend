import React from 'react'
import {useState, useEffect} from 'react'
import AllEvents from '../components/AllEvents'
import AddEvent from '../components/AddEvent'
import ApiFacade from '../apiFacade'


const Events = ({ user }) => {
    const [allEvents, setAllEvents] = useState([])
    const [allUsers, setAllUsers] = useState([])
   
    




  return (
    <div>
     
      <h1> Dinner Events </h1>

      

      {user.roles.split(',').includes('admin') ?  <AddEvent allEvents={allEvents} setAllEvents={setAllEvents} /> : null}
  
      {user.roles.split(',').includes('user') ?<AllEvents user={user} allEvents={allEvents} setAllEvents={setAllEvents} allUsers={allUsers} setAllUsers={setAllUsers} /> : null}
        
    </div>
    
  );
};

export default Events;