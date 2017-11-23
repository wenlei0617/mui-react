import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="mui-bar mui-bar-nav">
				{
					this.props.back?
					<a className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
					:null
				}
		    	<h1 className="mui-title">{this.props.title}</h1>
			</header>
		)
	}
}

export default Header;
