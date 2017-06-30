import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class FuncionarioForm extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit  = this.handleSubmit.bind(this)
		this.handleInputChange  = this.handleInputChange.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.handleFormSubmit();
	}

	handleInputChange(e) {
		e.preventDefault();
		const propriedade = e.target.id;
		const valorAtualizado = e.target.value;
		this.props.handleInputChange(propriedade, valorAtualizado);
	}

	render() {
		return (
			<div className='funcionario-form'>
				<form onSubmit={this.handleSubmit}>
					<Row>
						<Col sm={6}>
							<FormGroup bsSize='small'>
								<ControlLabel>Nome</ControlLabel>
								<FormControl type='text' id='nome' ref='nome' placeholder='Nome do funcionário' value={this.props.funcionario.nome} onChange={this.handleInputChange} />
							</FormGroup>
						</Col>
						<Col sm={6}>
							<FormGroup bsSize='small'>
								<ControlLabel>CPF</ControlLabel>
								<FormControl type='text' id='cpf' ref='cpf' placeholder='xxx.xxx.xxx-xx' value={this.props.funcionario.cpf} onChange={this.handleInputChange} />
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col sm={4}>
							<FormGroup bsSize='small'>
								<ControlLabel>E-mail</ControlLabel>
								<FormControl type='text' id='email' ref='email' placeholder='E-mail' value={this.props.funcionario.email} onChange={this.handleInputChange} />
							</FormGroup>
						</Col>
						<Col sm={4}>
							<FormGroup bsSize='small'>
								<ControlLabel>Telefone</ControlLabel>
								<FormControl type='text' id='telefone' ref='telefone' placeholder='Telefone' value={this.props.funcionario.telefone} onChange={this.handleInputChange} />
							</FormGroup>
						</Col>
						<Col sm={4}>
							<FormGroup bsSize='small'>
								<ControlLabel>Nascimento</ControlLabel>
								<FormControl type='text' id='nascimento' ref='nascimento' placeholder='yyyy-mm-dd' value={this.props.funcionario.nascimento} onChange={this.handleInputChange} />
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
	handleInputChange: PropTypes.func,
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
	handleInputChange: () => {},
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
