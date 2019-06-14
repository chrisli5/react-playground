import React, { Component } from 'react';

class RouletteGun extends Component {
    state = {
        chamber: null,
        spinningTheChamber: false,
    }
    
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    generateNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    renderContent = () => {
        const { bulletInChamber } = this.props;
        const { spinningTheChamber, chamber } = this.state;

        if(spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...';
        } else if(chamber === bulletInChamber) {
            return 'BANG!!!';
        } else {
            return `you're safe!`;
        }
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
        });
        this.timeout = setTimeout(() => {
            this.setState({
                chamber: this.generateNum(1, 8),
                spinningTheChamber: false,
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                <p>{this.renderContent()}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;