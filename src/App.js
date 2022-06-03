import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  
  state = {
    spicy_level: 0,
    spicy_status: "Not spicy"
  }

  increase_spicy() {
    this.setState({
      spicy_level: this.state.spicy_level + 1,
      spicy_status: this.spicy_status_update(this.state.spicy_level + 1)
    })
  }
  
  decrease_spicy() {
    this.setState({
      spicy_level: this.state.spicy_level - 1,
      spicy_status: this.spicy_status_update(this.state.spicy_level - 1)
    })
  }

  render() {
    return (
      <div>
        <h1>Salad King Pepper Chart SPA</h1>

        <button onClick={() => this.increase_spicy()}>Add Some Heat</button>
        <button onClick={() => this.decrease_spicy()}>Cool it Off</button>

        <h2>Spice Level: {this.state.spicy_level}</h2>
        <h2>Status: {this.state.spicy_status}</h2>
      </div>
    )
  }

  spicy_status_update(spicy_level){
    if (spicy_level < 1) {
      return "Not spicy"
    } else if (spicy_level > 0 && spicy_level <= 2) {
      return "Nice spicy"
    } else if (spicy_level > 2 && spicy_level <= 4){
      return "Start mopping your brow spicy"
    } else if (spicy_level > 4 && spicy_level <= 9){
        return "Watch out spicy"
    } else if (spicy_level > 9 && spicy_level <= 14){
        return "Are you sure? spicy"
    } else if (spicy_level > 14 && spicy_level <= 19){
        return "Some like it hot spicy"
    } else if (spicy_level >= 20){ 
        return "May cause stomach upset spicy"
    }


  }
}

