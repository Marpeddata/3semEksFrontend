import React from 'react'
import {Button } from 'react-bootstrap';



const EventLine = ({key,event, user}) => {



    
  return (
    <tr key={key}>
      <td>{event.dish}</td>
      <td>{event.location}</td>
      <td>{event.time}</td>
      <td>{event.pricePrPerson}</td>
      <td>{event.assignmentIds}</td>
      <td>{<Button onClick = {{/*() =>ApiFacade.addUserToTrip({username: user.username, tripId: trip.tripId})*/}}>Sign Up</Button>}</td>

    
      
    </tr>
  )
}

export default EventLine