import React, { Component } from 'react';
import blessed from 'blessed';
import { render } from 'react-blessed';
import {Dashboard} from './ui/screen/dashboard'

// Rendering a simple centered box with a bar chart
class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Dashboard></Dashboard>
    )
  }
}

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed-contrib demo'
});

// Adding a way to quit the program
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Rendering the React app using our screen
const component = render(<App />, screen);

screen.render()