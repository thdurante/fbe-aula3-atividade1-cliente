import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Funcionario extends Component {
	render() {
		return (
			<tr>
				<td className='text-center'>{this.props.details.id}</td>
				<td className='text-center'>{this.props.details.nome}</td>
				<td className='text-center'>{this.props.details.cpf}</td>
				<td className='text-center'>{this.props.details.email}</td>
				<td className='text-center'>{this.props.details.nascimento}</td>
				<td className='text-center'>{this.props.details.telefone}</td>
				<td className='text-center'>
					<ButtonToolbar>
						<ButtonGroup><Button href='#' bsStyle='warning' bsSize='xsmall'>Editar</Button></ButtonGroup>
						<ButtonGroup><Button href='#' bsStyle='danger' bsSize='xsmall'>Remover</Button></ButtonGroup>
					</ButtonToolbar>
				</td>
			</tr>
		);
	}
}

Funcionario.propTypes = {
	details: PropTypes.shape({
		id: PropTypes.number.isRequired,
		nome: PropTypes.string.isRequired,
		cpf: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		nascimento: PropTypes.string.isRequired,
		telefone: PropTypes.string.isRequired
	}).isRequired
}

Funcionario.defaultProps = {
	details: {
		id: 0,
		nome: '',
		cpf: '',
		email: '',
		nascimento: '',
		telefone: ''
	}
}

export default Funcionario;
