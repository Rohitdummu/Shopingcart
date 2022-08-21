import React,{useContext} from 'react'
import {Navbar, Container , Form, Button, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {Store} from './App'


function Navb() {
    //const {login} = useContext(Store)
    let login = localStorage.getItem("login")
    const {Dashname} = useContext(Store)
    const {searchd, setSearchd} = useContext(Store)
    const navigate = useNavigate()
    const lg = (e)=>{
        alert("logout successful ⚠️")
        localStorage.removeItem("token")
        localStorage.removeItem("login")
        localStorage.removeItem("name")
        navigate("/signin")
    }
  return (
    <div>
        <Navbar fixed="top" bg="info" variant="dark">
            <Container>
                <Navbar.Brand >
                    {' '}
                    Shoping App
                    <Navbar.Toggle />
                    <Navbar.Text>
                        <span className='text-danger'> | </span>
                        <Link style={{textDecoration:'none'}} to="/prod">Products</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <span className='text-danger'> | </span>
                        <Link style={{textDecoration:'none'}} to="/dashboard">Home</Link>
                    </Navbar.Text>
                </Navbar.Brand>
                    <Navbar.Toggle />
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value = {searchd}
                        onChange={(e)=> setSearchd(e.target.value)}
                        />
                        {/* <Button variant="outline-success">Search</Button> */}
                    </Form>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    { login ?
                        <Navbar.Text>
                            Signed in as: <Link to="/dashboard">{localStorage.getItem("name")}</Link>
                        </Navbar.Text>:
                        <Navbar.Text>
                            <Link style={{textDecoration:'none'}} to="/signup">Register</Link><span className='text-danger'> | </span>
                            <Link style={{textDecoration:'none'}} to="/signin">Login</Link>
                        </Navbar.Text> 
                    }
                    <span className='text-danger mx-1'> | </span>
                    <NavDropdown title = "Menu" className='text-white mx-1' id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            Separated link
                        </NavDropdown.Item>
                    <NavDropdown.Divider />
                        <NavDropdown.Item onClick={(e)=>lg(e)} >
                            Signout
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Navbar.Collapse>
                    {/*
                     <Navbar.Text>
                            Signed in as: <Link to="/dashboard">{localStorage.getItem("name")}</Link>
                        </Navbar.Text>: 
                        <NavDropdown  title = {localStorage.getItem("name")} className='text-danger' id="basic-nav-dropdown">
                        
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                     */}
            </Container>
        </Navbar>
    </div>
  )
}

export default Navb