import React, { Component } from 'react';

export default class ComponentCard extends Component {
    constructor() {
        super();
        console.log('Constructor called');
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log('Component is mounted');
    }

    componentDidUpdate() {
        console.log('Component is updated');
    }

    componentWillUnmount() {
        console.log('Component is unmounted');
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <button onClick={this.increment}>Click me</button>  
                <p>Count: {this.state.count}</p>
            </div>
        );
    }
}
