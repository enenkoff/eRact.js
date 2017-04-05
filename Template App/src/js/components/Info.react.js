import React, { Component } from 'react';

class Info extends Component {
    render() {
        const sections = this.props.data_info;
        const features = sections.map(function(item, i){
            return (
                <section key={i}>
                    <i><img src={"../src/media/" + item.icon + ".svg"} alt="" /></i>
                    <h4>{item.head}</h4>
                    <p>{item.description}</p>
                </section>
            );
        });
        return (
            <div className="info">
                <div className="container">
                    <div className="features">
                        {features}
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;