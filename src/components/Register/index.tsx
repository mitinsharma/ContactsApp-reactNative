import React, { useState } from 'react'
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import Container from '../common/Container';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import colors from '../../assets/theme/colors';
import { LOGIN } from '../../constants/routerNames';

const index = ({form, errors, onSubmit, onChange, error, loading}) => {
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

        <Text style={styles.subTitle}>Create a free account</Text>

        <View>
          {error &&<Text>{error.error}</Text>}
        </View>
        <View style={styles.form}>
          <Input 
            label='First name'
            placeholder='Enter First Name'
            iconPosition='right'
            onChangeText={ (value) => {
              onChange({name: "firstName", value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input 
            label='Last Name'
            placeholder='Enter Last Name'
            iconPosition='right'
            onChangeText={ (value) => {
              onChange({name: "lastName", value});
            }}
            error={errors.lastName|| error?.last_name?.[0]}
          />
          <Input 
            label='Email'
            placeholder='Enter Email'
            iconPosition='right'
            onChangeText={ (value) => {
              onChange({name: "email", value});
            }}
            error={errors.email || error?.email?.[0]}
          />
          <Input 
            label='Username'
            placeholder='Enter Username'
            iconPosition='right'
            onChangeText={ (value) => {
              onChange({name: "username", value});
            }}
            error={errors.username || error?.username?.[0]}
          />
          <Input 
            label='Password'
            placeholder='Enter Password'
            icon={<Text>SHOW</Text>}
            iconPosition='right'
            secureTextEntry={true}
            onChangeText={ (value) => {
              onChange({name: "password", value});
            }}
            error={errors.password || error?.password?.[0]}
          />
          <CustomButton 
            onPress={onSubmit}
            primary
            title='Register'
            loading={loading}
            disabled={loading}
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
    marginVertical: 25,
    alignSelf: 'center'
  },
  title: {
    paddingVertical:10,
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '500',
  }  ,
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500'
  },
  form: {
    paddingTop: 10
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