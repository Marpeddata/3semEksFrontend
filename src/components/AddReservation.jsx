import React from 'react'
import {useState} from 'react'
import ApiFacade from '../apiFacade'
import {Table, Dropdown } from 'react-bootstrap';



const AddReservation = ({allUsers, reservation, setReservation}) => {


    

    const [assignmentMembers, setAssignmentMembers] = useState([])
 

    

    const handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setReservation({...reservation, [name]: value});
        
        
    }

    // const handleSubmit = e => {
    //     e.preventDefault();
    
    //     ApiFacade.addEvent(reservation);
    //     console.log( "hehrere " + initialValue)
    //     const updatedEvents = [...allEvents, event];
    //     setAllEvents(updatedEvents);
    //     setReservation(initialValue);
        
    // }

    const clicked = (user) => {
        e.preventDefault();
        setAssignmentMembers([...assignmentMembers, user]);
        console.log(assignmentMembers)
        setReservation({ ...reservation, userDTOList: [...reservation.userDTOList, user] });
        
        console.log(reservation)
       
    }

    

  return (
    <div>
      <div>
     <Table bordered hover>
  <thead>
    <tr>
      <th>Family</th>
      <th>Contact Info</th>
      <th>Members</th>
      <th>Add Members</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <input
          className="form-control"
          id="familyName"
          name="familyName"
          type="text"
          value={reservation.familyName}
          onChange={handleChange}
          placeholder="Family name"
        />
      </td>
      <td>
        <input
          className="form-control"
          id="contactInfo"
          name="contactInfo"
          type="text"
          value={reservation.contactInfo}
          onChange={handleChange}
          placeholder="Enter Phone Number or Email"
        />
      </td>
      <td>
  {reservation.userDTOList.map((user) => (
    <p>{user.username}</p>

  ))}
</td>
      <td>
        
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Pick Members
      </Dropdown.Toggle>

      <Dropdown.Menu>
        
        {allUsers.map((user, index) => {
            return(<Dropdown.Item 
            key={index} 
            href={`#/action-${index}`}
            onClick={() => {clicked(user)
            console.log(user)
            }}
            >{user.username}</Dropdown.Item>
            );
        })}
      </Dropdown.Menu>
    </Dropdown>
      </td>
      
      
    </tr>
  </tbody>
</Table>
    </div>
    </div>
  )
}

export default AddReservation
