import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Bootcard({site}) {
    
  return (
    <Card style={{  width: '18rem', margin: '1rem' }}>
      {/* <Card.Img variant="top" src= "./components/usero.png"/> */}
      <Card.Body>
        <Card.Title>{site.name}</Card.Title>
        <Card.Text>
          {site.desc}
        </Card.Text>
        <Button variant="primary"><Link to={`/login/${site.name}`}>Gooo</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default Bootcard;