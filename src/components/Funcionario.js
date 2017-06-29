import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Funcionario extends Component {

	constructor(props) {
		super(props);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleEdit(e) {
		e.preventDefault();
		this.props.editHandler(this.props.details.id);
	}

	handleRemove(e) {
		e.preventDefault();
		this.props.removeHandler(this.props.details.id);
	}

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
						<ButtonGroup><Button onClick={this.handleEdit} bsStyle='warning' bsSize='xsmall'>Editar</Button></ButtonGroup>
						<ButtonGroup><Button onClick={this.handleRemove} bsStyle='danger' bsSize='xsmall'>Remover</Button></ButtonGroup>
					</ButtonToolbar>
				</td>
			</tr>
		);
	}
}

Funcionario.propTypes = {
	removeHandler: PropTypes.func.isRequired,
	editHandler: PropTypes.func.isRequired,
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
	removeHandler: () => {},
	editHandler: () => {},
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
