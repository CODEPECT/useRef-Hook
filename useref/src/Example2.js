import React, { Component } from 'react'

export default class Example2 extends Component {
    constructor(props){
        super(props)
        this.input=React.createRef()
        this.state={
            count:0
        }
    }
    increm=(e)=>{
        this.setState({
            count:this.state.count + 1
            
        })
        console.log(this.state.count)
    }
  render() {
    return (
      <div style={{textAlign:'center', paddingTop:'100px'}}>
        <h1>createRef in React !</h1>
        <h3>{this.state.count}</h3>
            <button onClick={this.increm}> Increment </button>
      </div>
    )
  }
}
