import React, { Component } from 'react'

class Greeting extends Component {
  state = {
    hour: null
  }
  
  componentDidMount() {
    this.getHour()
  }

  getHour = () => {
   const date = new Date();
   const hour = date.getHours();
   this.setState({
    hour
   });
  }

  render(){
    const {hour} = this.state;
    return (
      <div className="App">
        <span>{hour < 12 ? 'Good Morning' 
        : hour >12 && hour <= 17 ? 'Good Afternoon' : 'Good Evening'}</span>
      </div>
    );
  }

}

export default Greeting