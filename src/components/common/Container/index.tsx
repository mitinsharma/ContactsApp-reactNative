import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Container = ({children}) => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        {children}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {

  }
});

export default Container;