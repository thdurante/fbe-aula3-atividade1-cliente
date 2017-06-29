import React, { Component } from 'react';
import Layout from "../layout/Layout";
import FuncionarioForm from "../forms/FuncionarioForm";

class AddFuncionarioView extends Component {
	render() {
		return (
			<Layout>
				<div className="text-left">
					<FuncionarioForm/>
				</div>
			</Layout>
		);
	}
}

export default AddFuncionarioView;
