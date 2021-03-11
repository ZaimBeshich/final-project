import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const NavBar = () => {
  return (
   <Navbar className='sticky-top inline-flex justify-content-between mb-1' expand="lg" bg="danger" variant="danger" >
   <Navbar.Brand href="#home">
     <h1 className='light'>POKEDEX</h1>
   </Navbar.Brand>
   <div className=''>
   <Button>Home</Button>
   <Button>Catched</Button>
   </div>
 </Navbar>
 )
};

export default NavBar;