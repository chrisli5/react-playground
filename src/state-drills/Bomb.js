import React, { Component } from 'react';

class Bomb extends Component {
    state = {
        count: 0,
    };
    
    renderContent(count) {
        if(count >= 8) {
            clearInterval(this.interval);
            return 'BOOM!!!';
        } else if(count % 2 === 0) {
            return 'tick';
        } else {
            return 'tock';
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1;
            this.setState({
                count: newCount,
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <p>{this.renderContent(this.state.count)}</p>
            </div>
        );
    }
};

export default Bomb;