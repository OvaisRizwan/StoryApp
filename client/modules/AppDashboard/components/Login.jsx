import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { handleLogin } from './LoginActions';

// Import Style
//import styles from './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleCheckEmail(e) {
        this.setState({ email: e.target.value });
    }

    handleCheckPassword(e) {
        this.setState({ password: e.target.value });
    }

    handleLogin() {
        let login = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.handleLogin(login);
    }

    render() {
        return <section>
            <h1>Login:</h1>
            <div>
                <h4>Email: </h4>
                <input type="email" onChange={this.handleCheckEmail.bind(this)} />
            </div>
            <div>
                <h4>Password: </h4>
                <input type="password" onChange={this.handleCheckPassword.bind(this)} />
            </div>
            <br />
            <button onClick={this.handleLogin.bind(this)}>Submit</button>
            <br />
        </section>
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        handleLogin,
    }, dispatch);
}

function mapStateToProps(state) {
    return {
    };
}


export default connect(mapStateToProps, matchDispatchToProps)(Login);