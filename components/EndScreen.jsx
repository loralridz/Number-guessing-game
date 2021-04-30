import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export const EndScreen = ({
  setCounter,
  GAME_START_MESSAGE,
  stats,
  setStats
}) => {
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center" }}>Game Finished</Text>
      <Text style={styles.textRandom}>Score : {stats.score}</Text>
      <Text style={styles.textRandom}>Rounds : {stats.round}</Text>

      <Button
        title="Finish"
        color="green"
        onPress={() => {
          setStats({ ...stats, round: 1, input: 0, score: 0 });
          setCounter(GAME_START_MESSAGE);
        }}
      />
      <Button
        title="Play Again"
        color="green"
        onPress={() => {
          setStats({ ...stats, round: 1, input: 0, score: 0 });
          setCounter(-1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textRandom: {
    textAlign: "center",
    fontSize: 12
  }
});
