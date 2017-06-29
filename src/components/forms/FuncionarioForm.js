import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class FuncionarioForm extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit  = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault();

		const funcionario = {}
		for(const field in this.refs) {
			funcionario[field] = findDOMNode(this.refs[field]).value
		}

		this.props.handleFormSubmit(funcionario);
	}

	render() {
		return (
			<div className='funcionario-form'>
				<form onSubmit={this.handleSubmit}>
					<Row>
						<Col sm={6}>
							<FormGroup bsSize='small'>
								<ControlLabel>Nome</ControlLabel>
								<FormControl type='text' ref='nome' placeholder='Nome do funcionário' />
							</FormGroup>
						</Col>
						<Col sm={6}>
							<FormGroup bsSize='small'>
								<ControlLabel>CPF</ControlLabel>
								<FormControl type='text' ref='cpf' placeholder='xxx.xxx.xxx-xx' />
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col sm={4}>
							<FormGroup bsSize='small'>
								<ControlLabel>E-mail</ControlLabel>
								<FormControl type='text' ref='email' placeholder='E-mail' />
							</FormGroup>
						</Col>
						<Col sm={4}>
							<FormGroup bsSize='small'>
								<ControlLabel>Telefone</ControlLabel>
								<FormControl type='text' ref='telefone' placeholder='Telefone' />
							</FormGroup>
						</Col>
						<Col sm={4}>
							<FormGroup bsSize='small'>
								<ControlLabel>Nascimento</ControlLabel>
								<FormControl type='text' ref='nascimento' placeholder='yyyy-mm-dd' />
							</FormGroup>
						</Col>
					</Row>

					<br/>

					<Row>
						<Col sm={6}>
							<Button href='/' bsStyle='primary' block>Voltar</Button>
						</Col>
						<Col sm={6}>
							<Button type='submit' bsStyle='success' block>Salvar</Button>
						</Col>
					</Row>
				</form>
			</div>
		);
	}
}

FuncionarioForm.propTypes = {
	handleFormSubmit: PropTypes.func.isRequired,
	funcionario: PropTypes.shape({
		id: PropTypes.number.isRequired,
		nome: PropTypes.string.isRequired,
		cpf: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		nascimento: PropTypes.string.isRequired,
		telefone: PropTypes.string.isRequired
	}).isRequired
}

FuncionarioForm.defaultProps = {
	handleFormSubmit: () => {},
	funcionario: {
		id: 0,
		nome: '',
		cpf: '',
		email: '',
		nascimento: '',
		telefone: ''
	}
}

export default withRouter(FuncionarioForm);
