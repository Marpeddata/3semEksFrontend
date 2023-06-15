import React from 'react'
import {Button } from 'react-bootstrap';
import ApiFacade from '../apiFacade';



const EventLine = ({key,event, reservation}) => {


const clicked = (reservation) => {
    ApiFacade.createReservation(reservation, event.id)
    console.log(event.id)
}
    
  return (
    <tr key={key}>
      <td>{event.dish}</td>
      <td>{event.location}</td>
      <td>{event.time}</td>
      <td>{event.pricePrPerson}</td>
      <td>{event.assignmentIds}</td>
      <td>{<Button onClick = {() => clicked(reservation)}>Sign Up</Button>}</td>

    
      
    </tr>
  )
}

export default EventLine