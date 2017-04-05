import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router'
import App from './components/Application.react'
import Overview from './components/Overview.react'





render((
    <div>
        <Router history={hashHistory}>
            <div>
                <Route path="/" component={App} />
                <Route path="/overview" component={Overview} />
            </div>
        </Router>
    </div>
),document.getElementById('main'));

