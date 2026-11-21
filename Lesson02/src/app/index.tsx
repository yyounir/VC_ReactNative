import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import coffeeImg from "../../assets/images/coffee.jpg";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={coffeeImg}
        style={styles.image}
      >
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image : {
    width: "100%", height:"100%", flex:1, 
    resizeMode: "cover", justifyContent: "center",
  },
  text: {
    color: "white",
    padding:10,
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: "center",
    backgroundColor: "rgb(0,0,0,0.5)",
  }
})

