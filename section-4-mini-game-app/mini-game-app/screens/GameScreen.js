import { StyleSheet, Text, View } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
       {/* GUESS */}
      <View>
        <Text>Higher ot lower?</Text>
         {/* + - */}
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding:12,

  }
});