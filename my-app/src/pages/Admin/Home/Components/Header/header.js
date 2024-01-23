import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import logoApp from '../../../../../assets/logo192.png'
import { NavLink, useLocation } from 'react-router-dom';


const HeaderAdmin = () => {
    let location = useLocation();
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" >
                <Container>
                    <Navbar.Brand href="/admin">
                        <img
                            src={logoApp}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <span className=''>CellPhoneZ</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <NavLink className='nav-link' to='/admin'>Home</NavLink>

                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Manage" id="basic-nav-dropdown">

                                <NavDropdown.Item>
                                    <NavLink to='/admin/productvoucher'>Manage product voucher</NavLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <NavLink to='/admin/pamentmethod'>Manage payment method</NavLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <NavLink to='/admin/voucher'>Manage voucher</NavLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <NavLink to='/admin/product'>Manage product</NavLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <NavLink to='/admin/user'>Manage account</NavLink>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderAdmin