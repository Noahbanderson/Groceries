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
  };

  editClick = (id) => { 
    const item = this.state.items.find( i => i.id === id)    
    const newitemname = prompt("How would you like to edit this?", item.iname );
    this.setState({
      items: this.state.items.map( item => {
          if (item.id === id) {
            return {
              ...item, 
              iname: newitemname
            }
          }
          return item
        }
      )
    })
  };

  deleteClick = (id) => {
    const result = this.state.items.filter(item => item.id !== id )
    this.setState({items: result})
  };

  render() {
    return (
      <div>
        <Itemform addItem={this.addItem}/>
        <List 
          items={this.state.items} 
          title="Grocery List" 
          todoClick={this.handleClick}
          editClick={this.editClick}
          deleteClick={this.deleteClick}
        />
      </div>
    )
  }

}

export default App;