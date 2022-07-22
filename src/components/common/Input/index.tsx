import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../assets/theme/colors';

const Input = ({label, icon, iconPosition, onChangeText, style, value, error, ...props}) => {
  
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if(icon && iconPosition) {
      if(iconPosition === 'left') {
        return 'row';
      } else if(iconPosition === 'right')  {
        return 'row-reverse';
      }
    }
  }

  const getBorderColor = () => {
    if(error) {
      return colors.danger;
    }
    if(focused) {
      return colors.primary;
    }
    return colors.grey;
  }
  
  return (
      <View style={styles.inputContainer}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View style={[
          styles.wrapper, 
          {alignItems: icon ? 'center': 'stretch'},
          {flexDirection: getFlexDirection(), borderColor: getBorderColor()}
          ]}>
          <View>{icon && icon}</View>
          <TextInput
            style={[style, styles.textInput]}
            onChangeText={onChangeText}
            value={value}
            onFocus={() => {setFocused(true)}}
            onBlur={() => {setFocused(false)}}
            {...props}
          />
        </View>
        {error && <Text style={styles.error}> {error} </Text>}
      </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
  },
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
    width: '100%',
  },
  inputContainer: {
    paddingVertical: 15
  },
  label: {
    fontSize: 16
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12
  }
});

export default Input;