import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';
import ListaFuncionarios from '../components/ListaFuncionarios';

const router = (
	<BrowserRouter>
		<div>
			<Route path='/' exact component={Home} />
			<Route path='/funcionarios' exact component={ListaFuncionarios} />
		</div>
	</BrowserRouter>
);

export default router;
