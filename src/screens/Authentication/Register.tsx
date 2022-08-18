import { useNavigation, useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import RegisterComponent  from '../../components/Register';
import { LOGIN } from '../../constants/routerNames';
import register, {clearAuthState} from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/reducers/Provider';
import axiosInstance from '../../helpers/axiosInterceptor';


const Register = () => {

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const {authDispatch, authState:{error, loading, data}} = useContext(GlobalContext);

  // console.log('authState', authState)

  console.log('data:', data);

  useEffect(() => {
     if(data) {
         navigate(LOGIN);
     }
  },[data]);

  useFocusEffect(
    React.useCallback(() => {
      if(data || error) {
        clearAuthState()(authDispatch);
      }
    },[data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});  


    //remove errors
    if(value !== '') {

      if(name === 'password') {
        if(value.length < 8) {
          setErrors(prev => {
            return {...prev, [name]: 'Password should be greater than 8 digits'}
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null}
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null}
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'}
      });
    }
  }

  const onSubmit = () => {
    //validations

    if(!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please enter first name'}
      });
    }
    if(!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please enter last name'}
      });
    }
    if(!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please enter a valid email'}
      });
    }
    if(!form.username) {
      setErrors(prev => {
        return {...prev, username: 'Please enter your username'}
      });
    }
    if(!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please enter a password'}
      });
    }

    if(Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch);
    }
  }
  
  return <RegisterComponent 
    form={form} 
    errors={errors} 
    onChange={onChange}
    onSubmit={onSubmit}
    error={error}
    loading={loading}
  />;
}

export default Register;