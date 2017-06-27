import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
			<Navbar fixedBottom>
				<Navbar.Text pullRight>
					<small>
						<b>Alunos:</b> Gabriel Rascovit, Paulo de Oliveira e Thiago Durante.
					</small>
				</Navbar.Text>
			</Navbar>
		);
	}
}

export default Footer;
