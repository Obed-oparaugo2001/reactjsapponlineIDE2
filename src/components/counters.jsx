import React,{Component} from 'react'
import Counter from './components/counter'

export default class Counters extends Component{

  state={}

  render(){

    return (
      <React.fragment>
       <Counter/>
      </React.fragment>
    )
  }
}