import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

import Header from '../component/header/index';

class Login extends Component {
    componentDidMount() {
    	
    }
    handleNavigator() {
    	mui.openWindow({
    		url: '../main/index.html',
    		id: '../main/index.html'
    	})
    }
    render() {
        return (
            <div>
            	<Header title="登陆" back={false}/>
            	<div className="mui-content">
            		<div onClick={this.handleNavigator.bind(this)}>跳转到main</div>
            	</div>
            </div>
        );
    }
}

ReactDOM.render(
    <Login/>,
    document.querySelector('#app')
)