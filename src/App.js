import React, {Component} from 'react';
import './App.css';
import * as firebase from "firebase";
import Truthdare from "./Truthdare";

class App extends Component{
  constructor() {
    super();
    console.log(firebase);

  }
  render() {
    return(
        <div>
            <Truthdare></Truthdare>
          <h1>Start</h1>
        </div>
    )
  }
}

export default App;
