import React from 'react';
import Register from '../components ';

class RegisterContainer extends React.Component {
constructor (props) {
    super(props);
    this.state = {
        currentValue: 0,
    };
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
}
handleIncrement () {
    this.setState ({
        currentValue: this.state.currentValue + 1,
    });
}
handleDecrement () {
    this.setState ({
        currentValue: this.state.currentValue - 1,
    });
}
render() {
    return <Register 
    handleIncrement={this.handleIncrement}
    handleDecrement={this.handleDecrement}
    currentValue={this.state.currentValue}
    />;
}
componentWillUnmount() {
    console.log('willUnmount123344422');
}
}

export default RegisterContainer
