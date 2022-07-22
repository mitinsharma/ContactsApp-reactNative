import React, { useState } from 'react'
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import Container from '../../components/common/Container';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import colors from '../../assets/theme/colors';
import { REGISTER } from '../../constants/routerNames';

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
        <Text style={styles.subTitle}>Login</Text>

        <View style={styles.form}>
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
            title='Submit'
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need to new account?</Text>
            <TouchableOpacity onPress={() => {navigate(REGISTER)}}>
              <Text style={styles.linkButton}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginVertical: 50,
    alignSelf: 'center'
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '500',
  }  ,
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500'
  },
  form: {
    paddingTop: 5
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