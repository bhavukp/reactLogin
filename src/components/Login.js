import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loggedIn: null,
        }
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }

        this.state = {
            loggedIn
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value,
            }
        )


    }

    submitForm(e) {
        e.preventDefault()
        const {username, password} = this.state;
        //logic
        if (username === "A" & password === "B") {
            localStorage.setItem("token", 'sadhuwqedishdhghfgdsjd')
            this.setState({
                    loggedIn: true,
                }
            )
        }

    }

    render() {
        if (this.state.loggedIn === true) {
            return <Redirect to='/Admin'/>
        }
        return (
            <div className="root1">
                <h1 className="heading1"> Login Form</h1>
                <form onSubmit={this.submitForm}>
                    <input type="text" name="username" placeholder="Username.." value={this.state.username}
                           onChange={this.onChange}/>
                    <br/>
                    <input type="password" name="password" placeholder="Password.." value={this.state.password}
                           onChange={this.onChange}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Login
