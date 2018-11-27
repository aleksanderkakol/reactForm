import React from 'react';
import ReactDOM from 'react-dom';
require('../scss/main.scss');
import Form from './form.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Form />
        )
    }
}

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});