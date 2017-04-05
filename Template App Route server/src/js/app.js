import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router'
import App from './components/Application.react'
import Overview from './components/Overview.react'

var _path = "/mvc/templates/ex02/public/";

/*
    on local:
    path='/'
    var _path is unnecessary
    browserHistory -> hashHistory
*/


render((
    <div>
        <Router history={browserHistory}>
            <div>
                <Route path={_path} component={App} />
                <Route path={_path+'overview'} component={Overview} />
            </div>
        </Router>
    </div>
),document.getElementById('main'));

