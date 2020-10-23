import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

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
                <CustomButton type="submit" >SIGN IN</CustomButton>
            </form>
        </div >)
    }
}

export default SignIn;