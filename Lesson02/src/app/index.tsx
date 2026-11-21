import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coffee Shoppe</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 100,
  },
  text: {
    color: "black",
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: "center",
  }
})

export default app