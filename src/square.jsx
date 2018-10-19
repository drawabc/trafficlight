import React, { Component } from 'react';
import Circle from './circle.jsx'
const squarestyle = {
    width: '50px',
    height: '150px',
    background: 'black'
  };
  
class TrafficLight extends Component {
    state = {
        duct : [
            {status:1, color:"red"},
            {status:2, color:"yellow"},
            {status:3, color:"green"}
        ]
    }
    tick(){
        var copy=this.state.duct
        copy[0].status = (copy[0].status+2)%3
        copy[1].status = (copy[1].status+2)%3
        copy[2].status = (copy[2].status+2)%3
        this.setState({duct: copy})
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
    render() { 
        return(
            <div style={squarestyle} className="square">
                {this.state.duct.map(a => (
                   <Circle stat={a.status} color={a.color}/>
               ))}
            </div>
            );
    }
}

export default TrafficLight;