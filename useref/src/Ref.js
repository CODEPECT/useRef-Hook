import React, { Component } from 'react'

export default class Ref extends Component {
    constructor(props){
        super(props)
        this.input=React.createRef()
        this.state={
            name:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            name:this.input.current.value
        })
        console.log(this.input.current.value)
    }
  render() {
    return (
      <div style={{textAlign:'center', paddingTop:'100px'}}>
        <h1>createRef in React !</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" ref={this.input} />
            <button >Submit</button>
        </form>
      </div>
    )
  }
}
