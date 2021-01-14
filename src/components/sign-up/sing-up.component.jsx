import React from 'react';
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: "",
            password: "",
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (<div className='sign-in'>
            <h2>I do not have an account</h2>
            <span>SIGN-UP WITH YOUR EMAIL AND PASSWORD</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                    label="displayName"
                    handleChange={this.handleChange}
                    name="displayName"
                    type="text"
                    value={displayName}
                    required
                />
                <FormInput
                    label="email"
                    handleChange={this.handleChange}
                    name="email"
                    type="text"
                    value={email}
                    required
                />
                <FormInput
                    label="password"
                    handleChange={this.handleChange}
                    name="password"
                    type="password"
                    value={password}
                    required
                />
                <FormInput
                    label="confirmPassword"
                    handleChange={this.handleChange}
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    required
                />
                <CustomButton type="submit" >SIGN UP</CustomButton>
            </form>
        </div>)
    }
}

export default SignUp;