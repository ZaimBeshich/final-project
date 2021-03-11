import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




const SingleCard = () => {
  return (
<Card className='text-center m-1' border="dark" style={{ width: '15rem' }}>
<div>
<Card.Img variant="top" src="/pokemons/12.png" />
</div>

  <Card.Body>
    <Card.Title>Pokemon Name</Card.Title>
    <Button variant="info" size='lg' block>Catch</Button>
  </Card.Body>
</Card>
  );
};


export default SingleCard;
