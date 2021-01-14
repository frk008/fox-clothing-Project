import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

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
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign in with Google{' '}</CustomButton>
                </div>
            </form>
        </div>)
    }
}

export default SignIn;