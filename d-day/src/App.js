import React, { Component } from 'react';
import PhoneForm from './components/InputForm';
import "./App.css"
// 1368 x 
class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div id="body">
        <meta name="viewport" content="width=device-width, initial scale=1.0"></meta>
        <div id="space"></div>
        <div id="left">
          <div id="image"></div>
          <div id="input">
            <div>
              <PhoneForm onCreate={this.handleCreate} />
            </div>
          </div>
          <div id="add"></div>
        </div>
        <div id="space"></div>
        <div id="mid">
          <div id="image"></div>
          <div id="input">
            <div>
              <PhoneForm onCreate={this.handleCreate} />
            </div>
          </div>
          <div id="add"></div>
        </div>
        <div id="space"></div>
        <div id="right">
          <div id="image"></div>
          <div id="input">
            <div>
              <PhoneForm onCreate={this.handleCreate} />
            </div>
          </div>
          <div id="add">
            <div id="image"></div>
            <div id="input"></div>
            <div id="add"></div>
          </div>
        </div>
        <div id="space"></div>
        <div id="footer"></div>
      </div>
    )
  }
}


export default App;