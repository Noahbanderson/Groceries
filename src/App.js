import React from 'react';
import './App.css';
import List from "./List.js";
import Itemform from "./Itemform.js"


class App extends React.Component {

  state = {
    items: [
      {id: 1, iname: "Banana", retrieved: false},
      {id: 2, iname: "Apple", retrieved: true},
      {id: 3, iname: "Sugar", retrieved: false}
    ]
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    this.setState({items: [{iname: name, id: this.getUniqId(), retrieved: false}, ...this.state.items]})
  }

  handleClick = (id) => {
    
    this.setState({
      items: this.state.items.map( item => {
          if (item.id === id) {
            return {
              ...item, 
              retrieved: !item.retrieved
            }
          }
          return item
        }
      )
    })
  }



  render() {
    return (
      <div>
        <Itemform addItem={this.addItem}/>
        <List items={this.state.items} title="Grocery List" todoClick={this.handleClick}/>
      </div>
    )
  }

}

export default App;


    // addItem
    // const {items} = this.state
    // const item = {iname: name, id: this.getUniqId(), retrieved: false}
    // this.setState({items: item, ...items})

