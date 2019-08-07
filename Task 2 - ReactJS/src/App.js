import React, { Component } from 'react';
import Slider from './components/Slider';
import './css/style.css';

export default class App extends Component {
    state = { height: 250, width: 250 };

    changeBoxHeight = e => {
        console.log('TCL: MainPanel -> e.target.value', e.target.value);
        this.setState({
            height: e.target.value + 'px'
        });
    };

    changeBoxWidth = e => {
        console.log('TCL: MainPanel -> e.target.value', e.target.value);
        this.setState({
            width: e.target.value + 'px'
        });
    };

    render() {
        const { height, width } = this.state;
        console.log('TCL: MainPanel -> render -> height', height);

        return (
            <div className="container">
                <div className="grid">
                    <div className="main">
                        <div className="box" style={{ height: height, width: width }} />
                    </div>
                    <Slider className="right" onValueChange={this.changeBoxHeight} />
                    <Slider className="down" onValueChange={this.changeBoxWidth} />
                </div>
            </div>
        );
    }
}
