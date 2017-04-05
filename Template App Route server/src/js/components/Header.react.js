import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="logo"><img src="../src/media/logo.png" alt="logo" /></div>
                <div className="offer">
                    <h1>{this.props.data.head}</h1>
                    <h3>{this.props.data.subhead}</h3>
                    <div className="lnk">
                        <a href="#">Docs</a>
                        <span></span>
                        <a href="#">GitHub</a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;