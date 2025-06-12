import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <>
      {/* <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Your course goal" />
          <Button title="Add Goal" />
        </View>
        <View>
          <Text>List of goals ...</Text>
        </View>
      </View> */}
      <View
        style={{
          padding: 50,
          flexDirection: "row",
          width: "80%",
          height: 300,
          justifyContent: "space-around",
          alignItems: "stretch",
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: "blue",
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: "green",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>3</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#FAFAFA",
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
