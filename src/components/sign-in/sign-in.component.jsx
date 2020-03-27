import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
  ButtonsBarContainer,
  Linked
} from './sign-in.styles';
import SignInText from './sign-in.text';



class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
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
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  

  render() {
    return (

      
     <div>
     <Container component="main" maxWidth="xs">
       <SignInText/>
      
        <form onSubmit={this.handleSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
            
          />
          <FormInput
          required
          label='Password'
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
           />
           </Grid>
           </Grid>

          <ButtonsBarContainer>
          <Grid container spacing={2}>
          <Grid item>
            <CustomButton type='submit' variant="outlined" size="medium" color="primary" > Sign in </CustomButton>
</Grid>
<Grid item>
            <CustomButton onClick={signInWithGoogle} variant="outlined" size="medium" color="secondary">
              Sign in with Google
            </CustomButton>
            </Grid>
            </Grid>
          </ButtonsBarContainer>
          <br/>
          <Grid item>
              <Linked to='/signup'>
                {"Don't have an account? Sign Up"}
              </Linked>
            </Grid>
        </form>
       
        </Container>
     </div>
    );
  }
}

export default SignIn;
