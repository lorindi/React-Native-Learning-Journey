# Section 1: Getting Started

## Lectures in this Section
1. Welcome To This Course & What To Expect!
2. What Is React Native?
3. Join our Online Learning Community
4. A Glance Under The Hood Of React Native
5. Creating React Native Projects: Expo CLI vs React Native CLI
6. Creating a New React Native Project
7. Analyzing The Created Project
8. Running Our First App On A Real Device!
9. Setting Up A Local Development Environment
10. Course Setup
11. About This Course

## Key Concepts Learned
- React Native allows building native mobile apps using JavaScript and React
- React Native uses a "bridge" architecture to communicate between JavaScript and native code
- Applications created with React Native are truly native, not webviews
- Two main approaches to creating projects: Expo CLI (easier) and React Native CLI (more control)
- React Native components compile to native UI elements for each platform
- Expo provides tools for easier development, testing, and building
- Metro bundler is used to serve the JavaScript bundle to the device/simulator

## Setup and Installation
- Node.js and npm/yarn are prerequisites for React Native development
- React Native project with Expo installation: `npx create-expo-app@latest --template blank (name project)`


## Core Fundamentals
- Component-based architecture similar to React
- JSX for declaring UI elements
- Native components vs web components (View instead of div, Text instead of p)
- Styling with JavaScript objects, not CSS
- Flexbox layout system is primary method for arranging elements
- Mobile-first design considerations

## Notes
- React Native combines the best parts of native development with React's UI paradigm
- Hot reloading makes development faster
- Expo provides a QR code that can be scanned to test on physical devices
- iOS development requires a Mac, Android development works on any OS
- Debugging tools are different from web development

## Code Examples
```javascript
// Basic component structure
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
```

## Challenges and Solutions
| Challenge | Solution |
|-----------|----------|
| Setting up development environment | Followed course instructions step by step, ensured all prerequisites were installed |
| Running app on physical device | Used Expo Go app to scan QR code provided by Expo CLI |
| Understanding project structure | Analyzed each file to understand its purpose in the React Native architecture |
| Differentiating from React web development | Created a reference table of React vs React Native differences |

## Resources
- [React Native Official Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Directory (for packages)](https://reactnative.directory/)
- [Course GitHub Repository](https://github.com/academind/react-native-practical-guide-code)