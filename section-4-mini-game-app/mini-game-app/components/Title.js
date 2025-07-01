import { StyleSheet, Text } from "react-native";

function Title({title}) {
  return <Text style={styles.title}>{title}</Text>;
}

export default Title;

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb53f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
