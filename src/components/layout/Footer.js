import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
			<Navbar fixedBottom>
				<Nav pullRight>
					<Navbar.Text>
						<small>
							<b>Alunos:</b> Gabriel Rascovit, Paulo de Oliveira e Thiago Durante.
						</small>
					</Navbar.Text>
				</Nav>
			</Navbar>
		);
	}
}

export default Footer;
