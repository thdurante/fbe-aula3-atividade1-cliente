import React, { Component } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import Layout from '../layout/Layout';
import Funcionario from "../Funcionario";

class ListaFuncionariosView extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			funcionarios: [],
			flashMessage: ''
		}
	}

	async componentDidMount() {
		const flashMessage = this.props.history.location.hasOwnProperty('state') && this.props.history.location.state !== undefined ?
			this.props.history.location.state.flashMessage : '';

		const endpoint = 'http://localhost:8080/fbe-aula3-atividade1-1.0-SNAPSHOT/resources/funcionarios';
		const response = await fetch(endpoint, { method: 'GET' })
		const funcionarios = await response.json()
		await this.setState({ funcionarios, loaded: true, flashMessage })
	}

	render() {
		const flash = this.state.flashMessage !== '' ?
			(
				<Alert bsStyle='info'>
					<strong>Mensagem:</strong> {this.state.flashMessage}
				</Alert>
			) : <div/>;

		return (
			<Layout loaded={this.state.loaded}>
				{ flash }
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

export default ListaFuncionariosView;
