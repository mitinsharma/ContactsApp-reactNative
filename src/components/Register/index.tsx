import React, { useState } from 'react'
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import Container from '../common/Container';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import colors from '../../assets/theme/colors';
import { LOGIN } from '../../constants/routerNames';

const index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image 
        source={require('../../assets/images/logo.png')}
        height={70}
        width={70}
        style={styles.logo}
      />
      
      <View>

        <Text style={styles.title}>Welcome to ErContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          <Input 
            label='First name'
            placeholder='Enter First Name'
            iconPosition='right'
            value={username}
            onChangeText={setUsername}
          />
          <Input 
            label='Last Name'
            placeholder='Enter Last Name'
            iconPosition='right'
            value={username}
            onChangeText={setUsername}
          />
          <Input 
            label='Email'
            placeholder='Enter Email'
            iconPosition='right'
            value={username}
            onChangeText={setUsername}
          />
          <Input 
            label='Username'
            placeholder='Enter Username'
            iconPosition='right'
            value={username}
            onChangeText={setUsername}
          />
          <Input 
            label='Password'
            placeholder='Enter Password'
            icon={<Text>SHOW</Text>}
            iconPosition='right'
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <CustomButton 
            primary
            title='Register'
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => {navigate(LOGIN)}}>
              <Text style={styles.linkButton}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginVertical: 80,
    alignSelf: 'center'
  },
  title: {
    paddingVertical:10,
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '500',
  }  ,
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 5,
    fontWeight: '500'
  },
  form: {
    paddingTop: 25
  },
  createSection: {
    flexDirection: 'row',
    paddingTop: 10

  },
  infoText: {
    fontSize: 17
  },
  linkButton: {
    paddingLeft: 5,
    color: colors.primary,
    fontSize: 16
  }
});

export default index