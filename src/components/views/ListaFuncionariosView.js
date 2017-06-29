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

		this.handleRemove = this.handleRemove.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.fetchFuncionarios = this.fetchFuncionarios.bind(this);
	}

	async componentDidMount() {
		const flashMessage = this.props.history.location.hasOwnProperty('state') && this.props.history.location.state !== undefined ?
			this.props.history.location.state.flashMessage : '';

		const funcionarios = await this.fetchFuncionarios();
		this.setState({ funcionarios, loaded: true, flashMessage })
	}

	async fetchFuncionarios() {
		const endpoint = 'http://localhost:8080/fbe-aula3-atividade1-1.0-SNAPSHOT/resources/funcionarios';
		const response = await fetch(endpoint, { method: 'GET' })
		const funcionarios = await response.json()
		return funcionarios
	}

	async handleRemove(id) {
		this.setState({ loaded: false });

		const endpoint = 'http://localhost:8080/fbe-aula3-atividade1-1.0-SNAPSHOT/resources/funcionarios/' + id;
		const response = await fetch(endpoint, { method: 'DELETE' });
		const responseJSON = await response.json();
		const flashMessage = responseJSON.hasOwnProperty('sucesso') ? responseJSON.sucesso.mensagem : 'Funcionário não pode ser removido da base de dados!';

		const funcionarios = await this.fetchFuncionarios();
		this.setState({ funcionarios, loaded: true, flashMessage })
	}

	handleEdit(id) {

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
							this.state.funcionarios.map(obj => <Funcionario key={obj.id} details={obj} removeHandler={this.handleRemove} editHandler={this.handleRemove}/>)
						}
					</tbody>
				</Table>
				<Button href='/' bsStyle='primary' block>Voltar</Button>
			</Layout>
		);
	}
}

export default ListaFuncionariosView;
