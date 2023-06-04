import React,{Component} from 'react'
import Counter from './components/counter'

export default class Counters extends Component{

  state={
    counters=[
      {id:1,value:0},
      {id:2,value:0}, 
      {id:3,value:0},
      {id:4,value:0}
    ]
  }

  render(){

    return (
      <>
       <div>
         <h1>Items</h1>
       {this.state.counters.map(c=>{ <Counter key={c.id}/> })} 
       
       </div>
      </>
    )
  }
}