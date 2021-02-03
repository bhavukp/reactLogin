import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token");
    }
    
    render() {
        return (
            <div>
                <h1>You Have Been Logged Out.</h1>
                <button><Link to="/">Login Again</Link></button>
            </div>
        )
    }
}
