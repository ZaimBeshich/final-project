import SingleCard from '../Single_card/single_card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Main = () => {
  return (
  <Container fluid >
    <Row  md ='5' className='mx-auto'>
      <Col ><SingleCard/></Col>
      <Col ><SingleCard/></Col>
      <Col ><SingleCard/></Col>
      <Col ><SingleCard/></Col>
      <Col ><SingleCard/></Col>

  </Row>
   <Row>
      <Col><SingleCard/></Col>
      <Col><SingleCard/></Col>
      <Col><SingleCard/></Col>
      <Col><SingleCard/></Col>
      <Col><SingleCard/></Col>

    </Row>

  </Container>
  )
   };

   export default Main