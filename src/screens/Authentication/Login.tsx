import * as React from 'react';
import LoginComponent from '../../components/Login'
import {API_BASE} from "@env";



const Login = () => {
  console.log('API: ' , API_BASE);
  return <LoginComponent/>;
}

export default Login;