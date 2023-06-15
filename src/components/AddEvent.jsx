import React from 'react'
import {useState, } from 'react'
import {Button, Table } from 'react-bootstrap';
import ApiFacade from '../apiFacade'

const AddEvent = ({allEvents, setAllEvents}) => {

    const initialValue = {
        time: "",
        location: "",
        dish: "",
        pricePrPerson: 0 
    }

    const [event, setEvent] = useState(initialValue)

    const handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setEvent({...event, [name]: value});
        
        
    }

    const handleSubmit = e => {
        e.preventDefault();
    
    
        ApiFacade.addEvent(event);
        console.log( "hehrere " + initialValue)
        const updatedEvents = [...allEvents, event];
        setAllEvents(updatedEvents);
        setEvent(initialValue);
        
    }


  return (
    <div>
     <Table bordered hover>
  <thead>
    <tr>
      <th>Dish</th>
      <th>Location</th>
      <th>Time</th>
      <th>Price Pr Person</th>
      <th>Create</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <input
          className="form-control"
          id="dish"
          name="dish"
          type="text"
          value={event.dish}
          onChange={handleChange}
          placeholder="dish name"
        />
      </td>
      <td>
        <input
          className="form-control"
          id="location"
          name="location"
          type="text"
          value={event.location}
          onChange={handleChange}
          placeholder="Restaurant"
        />
      </td>
      <td>
        <input
          className="form-control"
          id="time"
          name="time"
          type="text"
          value={event.time}
          onChange={handleChange}
          placeholder="At what time?"
        />
      </td>
      <td>
        <input
          className="form-control"
          id="pricePrPerson"
          name="pricePrPerson"
          type="number"
          value={event.pricePrPerson}
          onChange={handleChange}
          placeholder="Price per person"
        />
      </td>
      <td>
        <Button onClick={handleSubmit}>Create</Button>
      </td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default AddEvent
