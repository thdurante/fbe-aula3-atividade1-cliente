import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import Layout from '../layout/Layout';
import Funcionario from '../Funcionario';
import Erro from '../Erro';

class ListaFuncionariosView extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			funcionario: {}
		}

		this.renderFuncionario = this.renderFuncionario.bind(this);
	}

	async componentDidMount() {
		const pathParams = this.props.match.params;
		const endpoint = pathParams.hasOwnProperty('funcionarioId') ?
			'http://localhost:8080/fbe-aula3-atividade1-1.0-SNAPSHOT/resources/funcionarios/' + pathParams.funcionarioId :
			'http://localhost:8080/fbe-aula3-atividade1-1.0-SNAPSHOT/resources/funcionarios?cpf=' + pathParams.funcionarioCpf;

		const response = await fetch(endpoint, { method: 'GET' })
		const funcionario = await response.json()
		await this.setState({ funcionario, loaded: true })
	}

	renderFuncionario() {
		return (
			<Table responsive hover>
				<thead>
				<tr>
					<th className='text-center'>#ID</th>
					<th className='text-center'>Nome</th>
					<th className='text-center'>CPF</th>
					<th className='text-center'>Email</th>
					<th className='text-center'>Nascimento</th>
					<th className='text-center'>Telefone</th>
					<th>Ações</th>
				</tr>
				</thead>
				<tbody>
					<Funcionario details={this.state.funcionario}/>
				</tbody>
			</Table>
		)
	}

	render() {
		const condicaoDeSucesso = Object.keys(this.state.funcionario).length !== 0 && !this.state.funcionario.hasOwnProperty('erro');

		const erro = this.state.funcionario.hasOwnProperty('erro') ?
			<Erro mensagem={this.state.funcionario.erro.mensagem} /> : <div/>;

		return (
			<Layout loaded={this.state.loaded}>
				{ condicaoDeSucesso ? this.renderFuncionario() : erro }
				<Button href='/' bsStyle='primary' block>Voltar</Button>
			</Layout>
		);
	}
}

export default ListaFuncionariosView;
