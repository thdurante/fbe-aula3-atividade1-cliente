import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import Loader from 'react-loader';
import PropTypes from 'prop-types';
import '../../css/base.css';

class Layout extends Component {
	render() {
		return (
			<div className='layout'>
				<Header/>
				<Grid>
					<Row>
						<Col sm={10} smOffset={1} className='text-center'>
							<div className='content'>
								<Loader loaded={this.props.loaded} bottom='50%' left='50%' className='spinner' position='fixed'>
									{this.props.children}
								</Loader>
							</div>
						</Col>
					</Row>
				</Grid>
				<Footer/>
			</div>
		);
	}
}

Layout.defaultProps = {
	loaded: true
}

Layout.propTypes = {
	loaded: PropTypes.bool
}

export default Layout;
