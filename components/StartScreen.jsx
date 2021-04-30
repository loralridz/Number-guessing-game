import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const StartScreen = (props) => {
  return(
    <View>
      <Text style={{ textAlign: 'center', fontSize: 16 }}>
        WELCOME to Guess a Number Game
      </Text>
      <Button title="Start Game" color="green" onPress={props.LetsBegin} />
    </View>
  );
}

export default StartScreen;