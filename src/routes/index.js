import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';
import ListaFuncionarios from '../components/ListaFuncionarios';
import AddFuncionario from '../components/AddFuncionario';

const router = (
	<BrowserRouter>
		<div>
			<Route path='/' exact component={Home} />
			<Route path='/funcionarios' exact component={ListaFuncionarios} />
			<Route path='/funcionarios/add' exact component={AddFuncionario} />
		</div>
	</BrowserRouter>
);

export default router;
