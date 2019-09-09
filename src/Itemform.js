import React from "react";

class Itemform extends React.Component {
  state={name:""}


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name)
    this.setState({name:""})
  };

  handleChange = (e) => {
    this.setState({name: e.target.value})
  };

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
       <input 
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        required 
        placeholder="Add an item"
       />
      </form>
    )
  };

}

export default Itemform;