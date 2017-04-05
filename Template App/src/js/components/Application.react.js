import React, { Component } from 'react';
import Header from './Header.react'
import Info from './Info.react'
import About from './About.react'
import Footer from './Footer.react'

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header data={head_box} />
                <Info data_info={info_box} />
                <About />
                <Footer />
            </div>

        );
    }
}

export default App;