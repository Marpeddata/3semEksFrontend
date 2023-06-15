import React from 'react'
import {useState, useEffect} from 'react'
import ApiFacade from '../apiFacade' 
import EventLine from './EventLine'
import { Table} from 'react-bootstrap';
import AddReservation from './AddReservation';

const AllEvents = ({user, allEvents, setAllEvents, allUsers, setAllUsers}) => {
  
    const initialValue= {
        familyName: "",
        contactInfo: "",
        userDTOList: [] 
    }

    const [reservation, setReservation] = useState(initialValue)
  
  useEffect(() => {
    ApiFacade.getAllEvents(setAllEvents)
    ApiFacade.getAllUsers(setAllUsers)
  }, [])

    return (
    <div>
      
    <AddReservation allUsers={allUsers} reservation={reservation} setReservation={setReservation}/>

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
                return <EventLine key={event.Id} event={event} user={user} reservation={reservation}  />;
            })}
            
            
          
        </tbody>
      </Table>

    </div>
  )
}

export default AllEvents
