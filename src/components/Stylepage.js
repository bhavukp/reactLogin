import React, {Component} from "react";
import './css/teststyle.css';

export default class Stylepage extends Component {

    render(props) {
        const className = this.props.testprop ? 'primary' : 'secondary';
        return (
            <h1 className={className}>Heading</h1>
        )
    }

}