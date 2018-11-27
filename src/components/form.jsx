import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form action="POST">
                <label>First name:
                    <input className="firstName" name="first-name" type="text" />
                </label>
                <label>Last name:
                    <input className="lastName" name="last-name" type="text" />
                </label>
                <label>Email:
                    <input className="email" name="email" type="email" />
                </label>
                <label>Date:
                    <input className="date" name="date" type="date" min="2018-11-28" />
                </label>
            </form>
        );
    }
}

export default Form;
