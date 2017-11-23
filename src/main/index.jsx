import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

import Header from '../component/header/index';

class Index extends Component {
    componentDidMount() {
        console.log(mui)
    }
    render() {
        return (
            <div>
            	<Header title="首页" back={true} />
            	<div className="mui-content">
            		<button type="button" className="mui-btn mui-btn-royal">红色</button> 
            	</div>
            </div>
        );
    }
}

ReactDOM.render(
    <Index/>,
    document.querySelector('#app')
)