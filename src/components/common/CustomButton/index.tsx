import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../assets/theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({title, disabled, loading, primary, secondary, danger,onPress, ...props}) => {
  
  const [focused, setFocused] = useState(false);

  const getBgColor = () => {

    if(disabled) {
      return colors.grey;
    }
    if(primary) {
      return colors.primary;
    }

    if(secondary) {
      return colors.danger;
    }

    if(danger){
      return colors.danger;
    }
  }
  
  return (
      <TouchableOpacity 
        style={[styles.wrapper, { backgroundColor: getBgColor()}]}
        disabled={disabled}
        onPress={onPress}
      >
        <View style={[styles.loaderSection]}>
            {loading && <ActivityIndicator color={primary? 'white' : colors.primary} />}
            {title && <Text style={[styles.label, {color:disabled ? 'black': colors.white, paddingLeft: loading? 15:0 }]}>{title}</Text>}
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  label: {
    fontSize:16
  },
  loaderSection: {
    flexDirection: 'row',
  }
});

export default Button;