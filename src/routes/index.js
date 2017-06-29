import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeView from '../components/views/HomeView';
import ListaFuncionariosView from '../components/views/ListaFuncionariosView';
import AddFuncionarioView from '../components/views/AddFuncionarioView';

const router = (
	<BrowserRouter>
		<div>
			<Route path='/' exact component={HomeView} />
			<Route path='/funcionarios' exact component={ListaFuncionariosView} />
			<Route path='/funcionarios/add' exact component={AddFuncionarioView} />
		</div>
	</BrowserRouter>
);

export default router;
