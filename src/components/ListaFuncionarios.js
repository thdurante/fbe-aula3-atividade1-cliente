import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import Layout from './layout/Layout';
import Funcionario from "./Funcionario";

class ListaFuncionarios extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			funcionarios: []
		}
	}

	async componentDidMount() {
		const endpoint = 'http://localhost:8080/fbe-aula3-atividade1-1.0-SNAPSHOT/resources/funcionarios';
		const response = await fetch(endpoint, { method: 'GET' })
		const funcionarios = await response.json()
		await this.setState({ funcionarios, loaded: true })
	}

	render() {
		return (
			<Layout loaded={this.state.loaded}>
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
						{
							this.state.funcionarios.map(obj => <Funcionario key={obj.id} details={obj}/>)
						}
					</tbody>
				</Table>
				<Button href='/' bsStyle='primary' block>Voltar</Button>
			</Layout>
		);
	}
}

export default ListaFuncionarios;
