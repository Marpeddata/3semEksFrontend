import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Home from "../routes/Home";
import About from "../routes/About";
import Admin from "../routes/Admin";
import Events from "../routes/Events";



function Content({ user, loggedIn }) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/about" element={<About user={user} />} />
                <Route path="/events" element={<Events user={user} />} />


                {
        loggedIn ?
            [ <>
                // add as many as you'd like here
               
        
                <Route path='/admin' element={<Admin user={user} />} />
            
                </>]
            :
            <>null</>
    }

    <Route path={"*"} element={ <Navigate replace to={ "/" }/> }/>

                </Routes>
        </div>
    )
}

export default Content
