import React,{Component} from 'react'
import '../style.css'
export default class Counter extends Component{
  state={
    counter:0,
  }

  handleIncrement= ()=>{
    const count = this.state.counter;
    const newCount= count + 1;
    this.setState({count:newCount});
    console.log('increase button clicked')
  }
  render(){

    return(
      <>
        <div>
           <span id="span">{this.formatCount()}</span> <button className="increase-btn" onClick={this.handleIncrement}>increase</button>
        </div>
      </>
    )
  }
  formatCount = ()=>{
    const count = this.state.counter;
   return count == 0 ? "Zero" : count }
}