import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeView from '../components/views/HomeView';
import ListaFuncionariosView from '../components/views/ListaFuncionariosView';
import AddFuncionarioView from '../components/views/AddFuncionarioView';
import ShowFuncionarioView from '../components/views/ShowFuncionarioView';

const router = (
	<BrowserRouter>
		<div>
			<Route path='/' exact component={HomeView} />
			<Route path='/funcionarios' exact component={ListaFuncionariosView} />
			<Route path='/funcionarios/add' exact component={AddFuncionarioView} />
			<Route path='/funcionarios/show/id/:funcionarioId' component={ShowFuncionarioView} />
			<Route path='/funcionarios/show/cpf/:funcionarioCpf' component={ShowFuncionarioView} />
		</div>
	</BrowserRouter>
);

export default router;
