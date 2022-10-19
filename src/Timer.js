import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'

let interval;
let realTime = 59

class Timer extends React.Component{
  constructor(){
    super();
    this.state = {
      time : realTime
    }
  }

  componentDidMount(){

    console.log("componentDidMount");

    interval = setInterval(()=>{
      this.setState({
        time:realTime
      })
      realTime--
    } , 1000)
  }

  componentDidUpdate(){
    if (this.state.time == 0) {
      clearInterval(interval);
    }
  }

  componentWillUnmount(){
    
  }

  render(){
    console.log("render");
    return(
      <h2 className="timer">
          {this.state.time}
      </h2>
    )
  }
}

export default Timer;