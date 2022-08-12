import React,{useContext} from 'react'
import {Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {Store} from './App'



function Navb() {
    const [login] = useContext(Store)
    const [Dashname] = useContext(Store)
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Shoping App
                </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    {/* <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text> */}
                    <Navbar.Toggle />
                    { login ?
                        <Navbar.Text>
                            Signed in as: <Link to="/dashboard">{Dashname}</Link>
                        </Navbar.Text>:
                        <Navbar.Text>
                            <Link style={{textDecoration:'none'}} to="/signup">Register</Link><span className='text-danger'> | </span>
                            <Link style={{textDecoration:'none'}} to="/signin">Login</Link>
                        </Navbar.Text> 
                    }
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navb