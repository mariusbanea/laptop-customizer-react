import React, { Component } from 'react';
import './App.css';

import Features from './features/features';
import Cart from './Cart/Cart';
import Header from './Header/Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '',
            cost: null
          },
        "Operating System": {
            name: '',
            cost: null
          },
        "Video Card":{
            name: '',
            cost: null
          },
        Display: {
            name: '',
            cost: null
          }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    
    return (
      <div className="App">
        <Header />    
        <main>
          <Features
            features={this.props.features}
            handleUpdate={(feature, newValue) => this.updateFeature(feature, newValue)}
            selected={this.state.selected}
          />
          <Cart
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;  
