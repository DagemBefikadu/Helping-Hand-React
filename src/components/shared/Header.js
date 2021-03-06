import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const navStyle = {
	backgroundColor: '#7c6c89'
}
const authenticatedOptions = (
	<>
		<Nav.Link>
			<Link to='/profile' style={linkStyle}>
				Profile
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Link>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Link>
        <Nav.Link>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Link>

	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
		<Nav.Link>
		    <Link to='/listeditems' style={linkStyle}>Listings</Link>
        </Nav.Link>
		<Nav.Link>
			<Link to='/about' style={linkStyle}>
				About
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/contact' style={linkStyle}>
				Contact
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar  variant='dark' expand='md' style={navStyle}>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
                Helping-Hand 
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.name}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
