
import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import fakedata from '../../FakeData/fakedata'

const EventsDetail = (props) => {
console.log(props.checkIn)
   const {btn,checkIn} = props;
   const product = fakedata.find( pd => pd.btn === btn);
  
    return (
        <div className="col-md-3">
           <CardGroup  style={{ display:"flex"}} >
<Card >
    <Card.Img variant="top" style={{ width: '18rem' }} src={product.img} />
 
    <Card.Body>
    
    </Card.Body>
    <Card.Footer>
    <Button  variant="primary" size="lg" style={{ width: '18rem' }}  block>
      clean
  </Button>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    );
};

export default EventsDetail;