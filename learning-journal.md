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

- How to style components in React Native using the StyleSheet API
- The differences in default styling between iOS and Android (e.g. font rendering, button appearance)
- How to create custom styles for reusable visual components like goal items
- How to use margin, padding, borderRadius, and background colors to enhance UI
- Why some styles behave slightly differently depending on the platform and how to test them on both
  
- How to make content scrollable using the ScrollView component
- The difference between ScrollView and FlatList for rendering lists
- How to prevent overscroll bounce on iOS with alwaysBounceVertical={false}
- How to wrap list items inside ScrollView for better UX when many items exist
- How to combine ScrollView with Flexbox layouts for flexible screen design
- That ScrollView renders all items at once, so it’s suitable for small lists only
- The importance of unique keys when mapping list items to avoid warnings or rendering bugs
  
- How to use FlatList for rendering lists more efficiently
- FlatList renders only visible items for better performance
- How to provide a data prop with an array of objects
- How to use renderItem to render each list item
- How to extract unique keys using keyExtractor
- Why using unique IDs is better than using array index as key
- How FlatList automatically handles scrolling and virtualization
- How to structure list item data with text and id fields

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
```

```javascript
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

```javascript
// Styled goal items for visual consistency across iOS and Android
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 5,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

```

```javascript
import {
  ScrollView,
} from "react-native";
// Add scrollable list using ScrollView and improve list key handling
    <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal, index) => (
            <View style={styles.goalItem} key={`${index}-${goal}`}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
```

```javascript
// Replace ScrollView with FlatList for efficient list rendering and better performance
import { FlatList } from "react-native";

// Define state
const [courseGoals, setCourseGoals] = useState([]);

// Add new goal with unique id
function addGoalHandler() {
  setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals,
    { text: enteredGoalText, id: Math.random().toString() },
  ]);
}

// Render FlatList
<View style={styles.goalsContainer}>
  <FlatList
    data={courseGoals}
    renderItem={(itemData) => (
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    )}
    keyExtractor={(item, index) => item.id}
    alwaysBounceVertical={false}
  />
</View>
``` 

### Challenges
- Remembering to bind the input handler with onChangeText, not onChange
- Structuring the layout properly so that input and list sections take up correct proportions of the screen
- Accidentally used old state value instead of functional update in setCourseGoals
- Got a warning about duplicate keys when using the same goal text
- Button styles differ across platforms and can’t be fully customized by default
- Some styles looked misaligned when switching between Android and iOS preview
- Handling scroll behavior to avoid overscroll bounce on iOS
- Understanding when to use ScrollView vs FlatList for lists
- Understanding the structure of FlatList’s props
- Figuring out how renderItem function works
- Remembering to wrap list item inside itemData.item
- Making sure each item has a unique key
- Deciding when to use FlatList vs ScrollView
- Handling empty input (adding empty goals by mistake)

### Solutions
- Reviewed documentation to confirm event names in React Native (onChangeText)
- Used Flexbox layout with proportions (flex: 1, flex: 5) to organize screen sections clearly
- Fixed the array update by using the current state as an argument in setCourseGoals
- Temporarily used the index as a key, with a note to replace it with a unique ID later
- Created custom View with styled Text for goals instead of styling the Button directly
- Used additional padding, margin, and borderRadius to achieve consistent visual layout
- Used alwaysBounceVertical={false} on ScrollView to prevent unwanted bounce on iOS
- Learned that ScrollView is good for small lists but not optimized for large data sets
- Read FlatList documentation carefully
- Practiced writing renderItem as inline arrow function
- Used itemData.item.text to access goal text
- Generated unique IDs using Math.random().toString()
- Used keyExtractor to assign keys properly
- Added logic to prevent adding empty goals (optional improvement for future)
 



## Day 4 - June 18, 2025

### Today I learned
- How to split the app into reusable components (GoalInput and GoalItem)
- How to pass props between parent and child components to handle user actions
- How to lift the state up from GoalInput to the main App component
- How to reset input fields after submitting user input
- How to structure the UI using custom components to keep the code clean and readable
- The importance of assigning unique keys to each item in FlatList
- How to create a controlled input field using TextInput with a value and onChangeText
- How to use flexDirection: "row" for horizontal layout in the input field
- How to style custom components using StyleSheet for better structure and platform consistency

### Code examples
```javascript
// GoalInput component: handles user input and calls a callback prop
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(""); // Clear input after adding
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

```
```javascript
// GoalItem component: displays each goal as a styled item
function GoalItem({ itemData }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  );
}

```
```javascript
// In App.js: manages state and renders components
<FlatList
  data={courseGoals}
  renderItem={(itemData) => {
    return <GoalItem itemData={itemData} />;
  }}
  keyExtractor={(item, index) => item.id}
/>
```

### Challenges
- Structuring the component tree and passing props correctly
- Forgetting to reset the input field after adding a goal
- Reusing styling in multiple components in a consistent way
  
### Solutions
- Reviewed how props work and practiced prop drilling
- Used controlled input (value + onChangeText) to manage input state
- Cleared the input after adding a goal by resetting state
- Broke down the layout into smaller, manageable files
  


## Day 5 - June 25, 2025

### Today I learned
- How to use the Pressable component to handle taps on items
- How to pass down id and onDeleteItem as props from App to GoalItem
- How to delete a goal by filtering the list using its unique ID
- How to use .bind(this, id) to pass arguments to event handlers
- How to enhance UX with Android ripple effect using Pressable
- How to refactor FlatList renderItem to support deletion logic
- The difference between View and Pressable for interactive UI elements
- How to update component props and avoid redundant View returns

### Code examples
```javascript
// In App.js: defines the handler and passes props
function deleteGoalHandler(id) {
  setCourseGoals((currentCourseGoals) => {
    return currentCourseGoals.filter((goal) => goal.id !== id);
  });
}
...
<FlatList
  data={courseGoals}
  renderItem={(itemData) => (
    <GoalItem
      text={itemData.item.text}
      id={itemData.item.id}
      onDeleteItem={deleteGoalHandler}
    />
  )}
  keyExtractor={(item) => item.id}
/>

```
```
// GoalItem component: handles taps and triggers deletion
function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
```
### Challenges
- Remembering to pass both text and id to each GoalItem
- Ensuring the right goal is deleted when tapped
- Avoiding duplicate or nested return statements in FlatList

### Solutions
- Used bind to pass the correct ID to the handler
- Replaced unused itemData props with explicit text and id
- Cleaned up FlatList render logic for better readability and control


## Day 6 - June 26, 2025

### Today I learned
- Adding a Modal Screen
- Styling the Modal Overlay
- Opening & Closing the Modal
- Working with Images & Changing Colors
- App Finishing Touches
  
### Code examples
```javascript
  import { StyleSheet, View, FlatList, Button } from "react-native";
  function startAddGoalHandler(){
    setModalIsVisible(true)
  }
  <Button title="Add New Goal" color="#5e0acc" onPress = {startAddGoalHandler}
  />
  <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
```

```javascript
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";
 <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
```

```javascript
 <View style={styles.buttonContainer}>
    <View style={styles.button}>
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
    <View style={styles.button}>
      <Button title="Cancel" onPress={addGoalHandler} />
    </View>
  </View>


  buttonContainer: {
  marginTop: 16,
  flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },

```
```javascript
// App.js
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
   endAddGoalHandler();

    <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
    <GoalInput
      visible={modalIsVisible}
      onAddGoal={addGoalHandler}
      onCancel={endAddGoalHandler}
    />
    // GoalInput.js
    <Button title="Cancel" onPress={props.onCancel} />
```

```javascript
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";
  <Image style={styles.image} source={require('../assets/images/goal.png')} />
    image: {
    width: 100,
    height: 100,
    margin: 20
  },
```

```javascript
import { StatusBar } from "expo-status-bar";
 <>
    <StatusBar style="light"/>

    ...
```









## Day 6 - June 26, 2025

### Today I learned


### Code examples
```javascript

```
## Day 6 - June 26, 2025

### Today I learned


### Code examples
```javascript

```
## Day 6 - June 26, 2025

### Today I learned


### Code examples
```javascript

```
## Day 6 - June 26, 2025

### Today I learned


### Code examples
```javascript

```
## Day 6 - June 26, 2025

### Today I learned


### Code examples
```javascript

```

