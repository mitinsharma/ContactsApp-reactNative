import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Container = ({children}) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View  style={styles.wrapper}>
          {children}
        </View>        
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  }
});

export default Container;