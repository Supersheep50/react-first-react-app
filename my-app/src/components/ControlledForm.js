import React, { Component } from 'react'

export default class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comments: '' ,
      }
    }

   handleNameChange = (event) => {
        let newValue = event.target.value
        this.setState({
            name: event.target.value
        })
   } 

   handleCategoryChange = (event) => {
    let newValue = event.target.value
    this.setState({
        category: event.target.value
    })
} 

    handleCommentsChange = (event) => {
    let newValue = event.target.value
    this.setState({
        comments: event.target.value
    })
} 

    hanndleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <h2>Please fill out the form below</h2>
        <form onSubmit={this.hanndleSubmit}>
            <div>
        <label htmlFor='id-name'>Your Name:</label>
        <input onChange={this.handleNameChange} value={this.state.name} id='id-name' name='name' type='text'/>
        </div>
        <div>
        <label htmlFor='id-category'>Query Category:</label>
        <select id='id-category' name='category' value={this.state.category} onChange={this.handleCategoryChange}>
            <option value='website'>Website Issue</option>
            <option value='order'>Order Issue</option>
            <option value='general'>General Inquiry</option>

        </select>
        </div>
        <div>
            <label htmlFor='id-comments'> Comments:</label>
            <textarea id='id-comments' name='comments' value={this.state.comments} onChange={this.handleCommentsChange} />
        </div>
        <input type='submit' value='Submit'/>
        </form>
        </div>
    )
  }
}

