# React Native Learning Journal

## Day 1 - May 8, 2025

### Today I learned
- The fundamental difference between React Native and other cross-platform technologies
- How to set up a development environment for React Native using Expo
- The structure of a basic React Native project
- How React Native bridges JavaScript code with native platform capabilities
- The core components View and Text and how they differ from HTML elements

### Code examples
```javascript
// Basic React Native component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function GreetingComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default GreetingComponent;
```

### Challenges
- Had trouble getting Expo working on my physical device at first
- Initially confused about how styling works in React Native
- Understanding the project folder structure was a bit overwhelming

### Solutions
- Reinstalled Expo Go app and made sure my phone and computer were on the same WiFi network
- Learned that StyleSheet.create is similar to CSS but with JavaScript objects and camelCase
- Drew a diagram of the project structure to better understand how files relate to each other

### Tomorrow's plan
- Complete Section 1 lectures
- Start building the first simple app
- Practice more with basic components and styling
- Try creating a custom component from scratch

---

## Day 2 - [Date]

### Today I learned
- What core components in React Native are – View, Text, Button, Image, TextInput
- How to use inline styles and StyleSheet.create for cleaner and reusable styling
- The difference between margin and padding, and how they affect layout
- How to apply colors using color, backgroundColor, and hex/rgb values
- Basic flexbox layout concepts – flexDirection, justifyContent, alignItems


### Code examples
```javascript
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{margin: 16, borderWidth: 2, borderColor:'blue', padding: 16 }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Tap me!" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


```

### Challenges
- I forgot to assign a value to the title prop in Button, which caused a JSX syntax error

### Solutions
- Fixed the JSX error by adding a string in quotes: title="Tap me"
- 

## Day 3 - [Date]

### Today I learned
- How to handle user input in React Native using the TextInput component
- How to manage and update component state using the useState hook
- How to create event handler functions and connect them to UI elements like Button and TextInput
- The difference between controlled and uncontrolled components in the context of form inputs
- How to structure nested views for input and output areas using Flexbox
  
- How to dynamically manage and render a list of items (goals) using the useState hook
- How to update arrays in state immutably using the functional form of setState
- How to render a list in JSX using map() and keys
- That nested <Text> elements should be used carefully – it’s better to render lists using FlatList or separate components later

### Code examples
```javascript

// Learned how to handle user input and events in React Native using TextInput, useState, and Button components
const [enteredGoalText, setEnteredGoalText] = useState("");

function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText);
}

function addGoalHandler() {
  console.log(enteredGoalText);
}

<TextInput
  style={styles.textInput}
  placeholder="Your course goal"
  onChangeText={goalInputHandler}
/>
<Button title="Add Goal" onPress={addGoalHandler} />


// Manage and display a dynamic list of goals using state and map
const [courseGoals, setCourseGoals] = useState([]);

function addGoalHandler() {
  setCourseGoals((currentGoals) => [...currentGoals, enteredGoalText]);
}

<View style={styles.goalsContainer}>
  {courseGoals.map((goal, index) => (
    <Text key={index}>{goal}</Text>
  ))}
</View>


```

### Challenges
- Remembering to bind the input handler with onChangeText, not onChange
- Structuring the layout properly so that input and list sections take up correct proportions of the screen
- Accidentally used old state value instead of functional update in setCourseGoals
- Got a warning about duplicate keys when using the same goal text

### Solutions
- Reviewed documentation to confirm event names in React Native (onChangeText)
- Used Flexbox layout with proportions (flex: 1, flex: 5) to organize screen sections clearly
- Fixed the array update by using the current state as an argument in setCourseGoals
- Temporarily used the index as a key, with a note to replace it with a unique ID later
 



