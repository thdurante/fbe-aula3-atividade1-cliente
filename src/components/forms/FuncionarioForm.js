import React, { Component } from 'react';

class FuncionarioForm extends Component {
	render() {
		return (
			<div className='funcionario-form'>
				// TODO
			</div>
		);
	}
}

FuncionarioForm.defaultProps = {
	funcionario: {
		id: 0,
		nome: '',
		cpf: '',
		email: '',
		nascimento: '',
		telefone: ''
	}
}

export default FuncionarioForm;
