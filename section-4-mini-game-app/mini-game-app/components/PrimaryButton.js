import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children }) {
  function pressHandler() {
    console.log('Pressed!');
    
  }
  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: "#4e0329",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
});