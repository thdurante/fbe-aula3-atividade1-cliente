import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Layout from './layout/Layout';

class Home extends Component {
	render() {
		return (
			<Layout>
				<p>Selecione uma das opções abaixo:</p>
				<Button bsStyle='primary' href='/funcionarios' block>Lista de Funcionários</Button>
				<Button bsStyle='primary' href='#' block>Adiciona Funcionário</Button>
				<Button bsStyle='primary' href='#' block>Busca Funcionário por ID</Button>
				<Button bsStyle='primary' href='#' block>Busca Funcionário por CPF</Button>
			</Layout>
		);
	}
}

export default Home;