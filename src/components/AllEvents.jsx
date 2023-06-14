import React from 'react'
import {useState, useEffect} from 'react'
import ApiFacade from '../apiFacade' 
import EventLine from './EventLine'
import { Table} from 'react-bootstrap';

const AllEvents = ({user}) => {
  
  const [allEvents, setAllEvents] = useState([])
  
  useEffect(() => {
    ApiFacade.getAllEvents(setAllEvents)
  }, [])

    return (
    <div>
      
      <Table bordered hover>
        <thead>
          <tr>
            <th>Dish</th>
            <th>Location</th>
            <th>Time</th>
            <th>Price Pr Person</th>
            <th>Assigned</th>
            <th>Signup</th>
          </tr>
        </thead>
        <tbody>
          
            {allEvents.map((event) => {
                return <EventLine key={event.tripId} event={event} user={user}  />;
            })}
            
            
          
        </tbody>
      </Table>

    </div>
  )
}

export default AllEvents
