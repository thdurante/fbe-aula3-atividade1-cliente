import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import '../../css/base.css';

class Layout extends Component {
	render() {
		return (
			<div className='layout'>
				<Header/>
				<Grid>
					<Row>
						<Col sm={6} smOffset={3} className='text-center'>
							<div className='content'>
								{this.props.children}
							</div>
						</Col>
					</Row>
				</Grid>
				<Footer/>
			</div>
		);
	}
}

export default Layout;
