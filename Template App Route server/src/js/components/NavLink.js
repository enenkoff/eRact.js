import React from 'react'
import { Link } from 'react-router'

var _path = "/mvc/templates/ex02/public";

/*
    on local:
    var _path is unnecessary
    <Link {...this.props} activeClassName="active"/>
 */


var NavLink = React.createClass({
    render() {
        return <Link to={_path + this.props.to} activeClassName="active">{this.props.children}</Link>
    }
});


module.exports = NavLink;