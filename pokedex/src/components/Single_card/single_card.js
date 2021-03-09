import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';



const SingleCard = () => {
  return (
<Card className = 'text-center' border="dark" style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/ru/c/ca/%D0%91%D1%83%D0%BB%D1%8C%D0%B1%D0%B0%D0%B7%D0%B0%D0%B2%D1%80.png" rounded />
  <Card.Body>
    <Card.Title>Pokemon Name</Card.Title>

    <Button variant="info">Catch</Button>
  </Card.Body>
</Card>
  );
};




 export default SingleCard;