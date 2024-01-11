import React, { useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')}
  }
  else if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.includes('@')}
  }
  return {value: '', isValid: false}
}

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  else if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value: '', isValid: false}
}

const formReducer = (state, action) => {
  if(action.type === 'FORM_INPUT'){
    return {isValid: action.isValid}
  }
  return {isValid: false}

}

const Login = (props) => {
  // const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: false});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: false});
  const [formState, dispatchForm] = useReducer(formReducer, {isValid: false});

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

      if(emailState.isValid && passwordState.isValid){
        dispatchForm({type: 'FORM_INPUT', val: true});
      }
    
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    
    if(passwordState.isValid && emailState.isValid) 
      dispatchForm({type: 'FORM_INPUT', val: true});
   
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});

    if(passwordState.isValid && emailState.isValid) 
      dispatchForm({type: 'FORM_INPUT', val: true});
    else
      dispatchForm({type: 'FORM_INPUT', val: false});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});

    if(passwordState.isValid && emailState.isValid) 
      dispatchForm({type: 'FORM_INPUT', val: true});
    else
      dispatchForm({type: 'FORM_INPUT', val: false});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formState.isValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;