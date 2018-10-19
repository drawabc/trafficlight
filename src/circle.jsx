import React, { Component } from 'react';
import styles from './index.css'

class Circle extends Component {
    state = {}
    render() { 
        return (  
             <div style={{background: (this.props.stat===1)?this.props.color:"black"}} className="circle"></div>
        );
    }
}
 
export default Circle;