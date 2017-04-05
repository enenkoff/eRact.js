import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        <p>&copy; 2014–2017 Palantir Technologies</p>
                        <p>Licensed under <a href="#">BSD</a></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;