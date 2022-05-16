import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const styles = {
  navBar: {
    backgroundColor: '#0b92cc',
  },
  linkNav: {
    whiteSpace: 'nowrap',
  },
};

export default function Navigation(props) {

  return (
    <Navbar style={styles.navBar} variant="dark">
      <Navbar.Brand> Kasper App</Navbar.Brand>
        <>
          <Nav>
            <NavLink exact to="/" style={styles.linkNav} className="nav-link">
              Home
            </NavLink>
          </Nav>
        </>
    </Navbar>
  );
}
