import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "fazalrehman207@gmail.com",
            password: "1234",
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: "", password: "" });
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    render() {
        return (<div className='sign-in'>
            <h2>I have an account</h2>
            <span>SIGN-IN</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput
                    label="email"
                    handleChange={this.handleChange}
                    name="email"
                    type="email"
                    value={this.state.email}

                    required
                />
                <FormInput
                    handleChange={this.handleChange}
                    name="password"
                    type="password"
                    value={this.state.password}
                    label="password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit" >SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign in with Google{' '}</CustomButton>
                </div>
            </form>
        </div>)
    }
}

export default SignIn;