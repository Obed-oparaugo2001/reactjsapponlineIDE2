import React,{Component} from 'react'
import '../style.css'
export default class Counter extends Component{
  state={
    counter:0,
  }

  handleIncrement(){

    console.log('increase button clicked')
    let increase = this.state.counter + 1
    const counter = this.state.counter
    setState({counter:increase})
  }
  render(){

    return(
      <>
        <div>
           <span id="span">{this.formatCount}</span> <button className="increase-btn" onClick={this.handleIncrement}>increase</button>
        </div>
      </>
    )
  }
  formatCount =()=>{
    const counter = this.state.counter;
   return counter == 0 ? "Zero" : counter }
}