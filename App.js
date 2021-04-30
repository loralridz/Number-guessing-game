import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { EndScreen } from "./components/EndScreen";
import { PlayScreen } from "./components/PlayScreen";
import StartScreen from "./components/StartScreen";

export default function App() {
  const GAME_START_MESSAGE = "Guess a Number Game";
  // counter for switching btw components
  const [counter, setCounter] = useState(GAME_START_MESSAGE);
  // random number
  const RANDOM_NUMBER = Math.floor(Math.random() * 1000) + 1;
  // stats of game : round, score, input
  const [stats, setStats] = useState({
    round: 1,
    score: 0,
    input: 0
  });

  const screenSwitching = () => {
    if (counter === GAME_START_MESSAGE)
      return <StartScreen LetsBegin={() => setCounter(-1)} />;
    else if (counter === -2)
      return (
        <EndScreen
          setCounter={setCounter}
          GAME_START_MESSAGE={GAME_START_MESSAGE}
          stats={stats}
          setStats={setStats}
        />
      );
    else
      return (
        <PlayScreen
          setCounter={setCounter}
          RANDOM_NUMBER={RANDOM_NUMBER}
          stats={stats}
          setStats={setStats}
        />
      );
  };
  // switch btw screens
  return <View style={styles.container}>{screenSwitching()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10
  }
});
