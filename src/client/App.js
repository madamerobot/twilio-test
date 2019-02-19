import React, { Component } from 'react';
import './app.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      // username: ''
    };
  }

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: 'Test' }));
  }

  render() {
    return (
      <div>
        <h1>Twilio Test</h1>
        <button>Send SMS</button>
      </div>
    );
  }
}
