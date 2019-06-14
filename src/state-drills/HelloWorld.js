import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {
        who: 'World',
    };

    handleFriendClick = () => {
        this.setState({
            who: 'Friend'
        });
    }

    handleReactClick = () => {
        this.setState({
            who: 'React'
        });
    }

    handleWorldClick = () => {
        this.setState({
            who: 'World'
        });
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleFriendClick}>Friend</button>
                <button onClick={this.handleReactClick}>React</button>
                <button onClick={this.handleWorldClick}>World</button>
            </div>
        );
    }
};

export default HelloWorld;