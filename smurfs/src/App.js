import React, { Component } from "react";
import "./App.css";
import Form from './components/Form';
import SmurfsList from './components/SnurfsList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
					<h1>SMURFS!</h1>
					<Form/>
				</header>
				<SmurfsList/>
      </div>
    );
  }
}

export default App;
