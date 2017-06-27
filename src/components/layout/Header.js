import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to='/'>FBE - Atividade 3</Link>
					</Navbar.Brand>
				</Navbar.Header>
			</Navbar>
		);
	}
}

export default Header;
