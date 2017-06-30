import React, { Component } from 'react';
import Layout from "../layout/Layout";
import FuncionarioForm from "../forms/FuncionarioForm";
import PropTypes from 'prop-types';

class EditFuncionarioView extends Component {

	constructor(props) {
		super(props);

		this.state = {
			funcionario: {},
			loaded: false
		}

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	async componentDidMount() {
		const pathParams = this.props.match.params;
		const endpoint = 'http://localhost:8080/fbe-aula3-atividade1-1.0-SNAPSHOT/resources/funcionarios/' + pathParams.funcionarioId;
		const response = await fetch(endpoint, { method: 'GET' })
		const funcionario = await response.json()
		this.setState({ funcionario, loaded: true })
	}

	async handleFormSubmit() {
		const pathParams = this.props.match.params;
		const endpoint = 'http://localhost:8080/fbe-aula3-atividade1-1.0-SNAPSHOT/resources/funcionarios/' + pathParams.funcionarioId;
		const response = await fetch(endpoint, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(this.state.funcionario)
		});
		const responseJSON = await response.json();
		const flashMessage = responseJSON.hasOwnProperty('erro') ? responseJSON.erro.mensagem : 'Funcionário adicionado com sucesso!';
		this.context.router.history.push('/funcionarios', { flashMessage });
	}

	handleInputChange(propriedade, valorAtualizado) {
		const funcionario = {...this.state.funcionario}
		funcionario[propriedade] = valorAtualizado;
		this.setState({ funcionario })
	}

	render() {
		const form = (
			<FuncionarioForm
				handleFormSubmit={this.handleFormSubmit}
				handleInputChange={this.handleInputChange}
			  funcionario={this.state.funcionario}
			/>
		)

		return (
			<Layout>
				<div className="text-left">
					{ Object.keys(this.state.funcionario).length !== 0 ? form : <div/> }
				</div>
			</Layout>
		);
	}
}

EditFuncionarioView.contextTypes = {
	router: PropTypes.object.isRequired
}

export default EditFuncionarioView;
