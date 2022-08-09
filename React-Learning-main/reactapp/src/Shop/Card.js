import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function card(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"http://localhost:8000/shop/" + props.image}/>
     
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          great food!!.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={`/detaill${props.id}`}>Details</Card.Link>
        {/* <td><Link to={`/detaill${p.id}`}>Details</Link></td> */}
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default card;