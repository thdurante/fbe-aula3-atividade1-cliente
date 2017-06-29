import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Layout from '../layout/Layout';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class HomeView extends Component {

	constructor(props) {
		super(props);
		this.buscaPorId = this.buscaPorId.bind(this);
		this.buscaPorCpf = this.buscaPorCpf.bind(this);
	}

	buscaPorId(e) {
		e.preventDefault();
		const id = prompt('Insira um ID:');
		const path = '/funcionarios/show/id/' + id;
		this.context.router.history.push(path);
	}

	buscaPorCpf(e) {
		e.preventDefault();
		const cpf = prompt('Insira um CPF:');
		const path = '/funcionarios/show/cpf/' + cpf;
		this.context.router.history.push(path);
	}

	render() {
		return (
			<Layout>
				<p>Selecione uma das opções abaixo:</p>
				<Button bsStyle='primary' href='/funcionarios' block>Lista de Funcionários</Button>
				<Button bsStyle='primary' href='/funcionarios/add' block>Adiciona Funcionário</Button>
				<Button bsStyle='primary' onClick={this.buscaPorId} block>Busca Funcionário por ID</Button>
				<Button bsStyle='primary' onClick={this.buscaPorCpf} block>Busca Funcionário por CPF</Button>
			</Layout>
		);
	}
}

HomeView.contextTypes = {
	router: PropTypes.object.isRequired
}

export default withRouter(HomeView);
