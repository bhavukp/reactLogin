import React, { Component } from 'react'
import axios from 'axios';

export default class Postlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userid: '',
             title:'',
             body:'',
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then( response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    }

    render() {
        const {userid,title,body} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h1>Post Form</h1>
                    <input type="text" name="userid" value={userid} placeholder="User Id.." onChange={this.changeHandler}/>
                    <br/>
                    <input type="text" name="title" value={title} placeholder="Title.." onChange={this.changeHandler}/>
                    <br/>
                    <input type="text" name="body" value={body} placeholder="Body.."onChange={this.changeHandler}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
