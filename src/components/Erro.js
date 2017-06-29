import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Erro extends Component {
	render() {
		return (
			<Alert bsStyle='danger'>
				<strong>Ops, algo deu errado!</strong> {this.props.mensagem}
			</Alert>
		);
	}
}

Erro.propTypes = {
	mensagem: PropTypes.string.isRequired
}

Erro.defaultProps = {
	mensagem: ''
}

export default Erro;
