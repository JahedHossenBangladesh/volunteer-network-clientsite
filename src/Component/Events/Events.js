import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Events = (props) => {
  const {img,btn,key} = props.event;

  const history = useHistory()
  const handleBook = (btn) => {
      history.push(`/forms/${btn}`);
  }

    return (
<div className="col-md-3">
<CardGroup  style={{ display:"flex"}} >
<Card >
    <Card.Img variant="top" style={{ width: '18rem' }} src={img} />
    <Card.Body>
    
    </Card.Body>
    <Card.Footer>
    <Button  onClick={() => handleBook(props.event.btn)}  variant="primary" size="lg" style={{ width: '18rem' }}  block>
      {btn}
  </Button>
    </Card.Footer>
  </Card>
</CardGroup>
</div>

    );
};

export default Events;