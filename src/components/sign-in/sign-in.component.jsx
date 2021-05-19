import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    state = { 
        email:'',
        password:''
     
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    render() { 
        return ( 
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' type="email" name="email" value={this.state.email} required handleChange={this.handleChange}/>
                    
                    <FormInput label='password' type="password" name="password" value={this.state.password} required  handleChange={this.handleChange}/>
                   
                    <CustomButton type="submit">Sign In </CustomButton>
                  
                </form>
            </div>
         );
    }
}
 
export default SignIn;