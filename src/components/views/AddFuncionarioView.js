import React, { Component } from 'react';
import Layout from "../layout/Layout";
import FuncionarioForm from "../forms/FuncionarioForm";
import PropTypes from 'prop-types';

class AddFuncionarioView extends Component {

	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	async handleFormSubmit(funcionario) {
		const endpoint = 'http://localhost:8080/fbe-aula3-atividade1-1.0-SNAPSHOT/resources/funcionarios';
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(funcionario)
		});
		const responseJSON = await response.json();
		const flashMessage = responseJSON.hasOwnProperty('erro') ? responseJSON.erro.mensagem : 'Funcionário adicionado com sucesso!';
		this.context.router.history.push('/funcionarios', { flashMessage });
	}

	render() {
		return (
			<Layout>
				<div className="text-left">
					<FuncionarioForm
						handleFormSubmit={this.handleFormSubmit}
					/>
				</div>
			</Layout>
		);
	}
}

AddFuncionarioView.contextTypes = {
	router: PropTypes.object.isRequired
}

export default AddFuncionarioView;
