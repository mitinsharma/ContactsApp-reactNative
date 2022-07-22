import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';


const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <Container>
      <Input 
        label='Username'
        onChangeText={setUsername}
        value={username}
        //iconPosition='left'
        //icon={<Text>HIDE</Text>}
        //error= {'This field is required'}
      />
      <Input 
        label='Password'
        onChangeText={setPassword}
        value={password}
      />
      <CustomButton 
        secondary
        title='Submit'
        loading={true}
        disabled={true}
      />
      <CustomButton 
        primary
        title='Submit'
        loading={true}
      />
      <CustomButton 
        secondary
        title='Submit'
        loading={true}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {

  },
});

export default Login;