import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Bootcard({site}) {
    
  return (
    <Card style={{  width: '18rem', margin: '1rem' }}>
      {/* <Card.Img variant="top" src= "./components/usero.png"/> */}
      <Card.Body>
        <Card.Title>{site.name}</Card.Title>
        <Card.Text>
          {site.desc}
        </Card.Text>
        <Button variant="primary" href={site.link}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Bootcard;