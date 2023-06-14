import React from 'react'
import { NavLink } from 'react-router-dom';


const Home = ({ user }) => {
  

  return (
    <div>
      <div className='text-center mt-5'>
      <h1> DinnerPlanner </h1>

      {user.username === "" ? (<h4>Log ind for at benytte programmet </h4>) :
        (<>
         

        </>)}
        
        </div>
    </div>
  );
};

export default Home;

