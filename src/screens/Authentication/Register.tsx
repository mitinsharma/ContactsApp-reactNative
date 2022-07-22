import * as React from 'react';
import { useState } from 'react';
import RegisterComponent  from '../../components/Register'


const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    
    //remove errors
    if(value !== '') {

      if(name === 'password') {
        if(value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'Password should be greater than 6 digits'}
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
    console.log('form: >>', form);

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
  }

  return <RegisterComponent 
    form={form} 
    errors={errors} 
    onChange={onChange}
    onSubmit={onSubmit}
  />;
}

export default Register;