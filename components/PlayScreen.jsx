import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export const PlayScreen = ({
  RANDOM_NUMBER,
  setCounter,
  setStats,
  stats
}) => {

  // handles score and no of levels to display alert
  const handlePress = () => {
    if (stats.input === RANDOM_NUMBER) {
      alert("Correct!!");
      setStats({ ...stats, score: stats.score + 10 });
    }

    if (stats.input > RANDOM_NUMBER) {
      alert("Try Above");
    }

    if (stats.input < RANDOM_NUMBER) {
      alert("Try Below");
    }

    if (stats.round === 5) {
      setCounter(-2);
      return;
    }
    // round increment
    setStats({ ...stats, round: stats.round + 1 });
  };

  // btn input handler to set the value of input 
  const numClick = (e) => {
    if (stats.input === 0) setStats({ ...stats, input: e });
    else setStats({ ...stats, input: stats.input + "" + e });
  };

  const handleReset = () => {
    // reset state to 0
    setStats({ ...stats, input: 0 });
  };

  const handleClear = () => {
    // slice off the last digit 
    const newInput = stats.input.slice(0, -1);
    // to avoid empty input field add zero else new input value
    if (newInput.length === 0) setStats({ ...stats, input: 0 });
    else setStats({ ...stats, input: newInput });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textRandom}>Guess a randomly generated number.</Text>
      <Text style={styles.textRandom}>
        The range of randomly generated number is smaller than 100.
      </Text>
      <Text style={styles.textRandom}>
        User has 5 attempts to guess a number.
      </Text>
      <Text style={styles.textView}>{stats.input}</Text>
      <View style={styles.buttonsRowContainer}>
        <View style={styles.buttonContainer}>
          <Button title="1" onPress={numClick.bind(this, 1)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="2" onPress={numClick.bind(this, 2)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="3" onPress={numClick.bind(this, 3)} />
        </View>
      </View>
      <View style={styles.buttonsRowContainer}>
        <View style={styles.buttonContainer}>
          <Button title="4" onPress={numClick.bind(this, 4)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="5" onPress={numClick.bind(this, 5)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="6" onPress={numClick.bind(this, 6)} />
        </View>
      </View>
      <View style={styles.buttonsRowContainer}>
        <View style={styles.buttonContainer}>
          <Button title="7" onPress={numClick.bind(this, 7)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="8" onPress={numClick.bind(this, 8)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="9" onPress={numClick.bind(this, 9)} />
        </View>
      </View>
      <View style={styles.buttonsRowContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={handleReset} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="0" onPress={numClick.bind(this, 0)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Clear" onPress={handleClear} />
        </View>
      </View>
      <View style={{ paddingTop: 20, width: "100%" }}>
        <View style={{ width: "50%", alignSelf: "center" }}>
          <Button title="Finish" color="green" onPress={handlePress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10
  },
  textRandom: {
    textAlign: "center",
    fontSize: 12
  },
  textView: {
    textAlign: "center",
    fontSize: 40
  },
  buttonsRowContainer: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    width: "33%",
    margin: 2
  }
});
