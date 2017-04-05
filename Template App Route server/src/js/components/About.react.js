import React, { Component } from 'react';
import NavLink from './NavLink'

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="container">
                    <img src="../src/media/palantir.svg" alt="palantir" />
                    <p>Blueprint is an open source project <br />developed at Palantir.</p>
                    <div className="hiring">
                        <p>We’re hiring designers and engineers!</p>
                        <NavLink to="/overview">Overview</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;