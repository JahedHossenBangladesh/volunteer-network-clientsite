import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { UserContext } from '../../App';
import EventsDetail from '../EventsDetail/EventsDetail';

const SelectedEvent = () => {
    const [selectedEvent,setSelectedEvent] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

useEffect(() => {
    fetch('http://localhost:5000/selected?email='+loggedInUser.email,{
        method:'GET',
        headers:{
            'Content-Type': 'application/js',
            authorization:`Bearer ${sessionStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
    .then(data => setSelectedEvent(data))
},[])
console.log(selectedEvent);

function dlt(id){
  
 fetch(`http://localhost:5000/delete/${id}`,{
     method:'DELETE'
 })
 .then(res => res.json())
 .then(result =>{
     console.log('deleted')
 })
}

    return (
        <div className="row">
            <h4> length : {selectedEvent.length}</h4>
            <p>Clean button is work but not smoothy </p>
            
            {/* <EventsDetail btn={select}> </EventsDetail> */}
            {
                selectedEvent.map(select =>    
                
                    <div className="col-md-3">
                        <CardGroup style={{ display: "flex" }} >

                            <Card >
                                <Card.Img variant="top" style={{ width: '18rem' }} src={select.img} />

                                <Card.Body>
                                    <p>{select.btn}</p>
                                    <p>{select.checkIn}</p>
                                </Card.Body>
                                <Card.Footer>
                            {/* <Button onClick={()=>dlt(`event,${select._id}`)} variant="primary" size="lg" style={{ width: '18rem' }} block> */}
                            <Button onClick={()=>dlt(select._id)} variant="primary" size="lg" style={{ width: '18rem' }} block>
                                      clear
       </Button>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </div> 
             )
            }
        </div>
    );
};

export default SelectedEvent;