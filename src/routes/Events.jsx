import React from 'react'
import AllEvents from '../components/AllEvents'


const Events = ({ user }) => {
  

  return (
    <div>
     
      <h1> Dinner Events </h1>
  
      <AllEvents user={user} />
        
    </div>
    
  );
};

export default Events;