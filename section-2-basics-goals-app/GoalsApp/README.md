# Goals App

A goal tracking application developed with React Native.

## Project Overview
- Demo application for adding and managing a list of goals
- Focus on core components and styling in React Native
- Practical application of Flexbox for creating layouts
- Implementation of modal screens and platform-specific UI effects
- My first complete React Native project from the course

## Features
- Adding new goals through a text field and button in a modal screen
- Displaying goals in an optimized scrollable list with FlatList
- Deleting goals through touch with visual feedback
- Adaptive design for iOS and Android with platform-specific styling
- Smooth animations and transitions
- Visual feedback on user interactions

## Implementation Details
- Using core React Native components: View, Text, TextInput, Button
- Using ScrollView for small lists and FlatList for longer lists
- Breaking down the application into smaller, reusable components
- Handling events with the Pressable component
- Adding platform-specific visual feedback (Ripple effect on Android)
- Implementing Modal screens for focused user input
- Styling with StyleSheet API and Flexbox
- Adding images and custom colors to enhance the UI

## Core Components Used
- View: For containers and layout structure
- Text: For displaying text content
- TextInput: For goal input field
- Button/Pressable: For interactive buttons with feedback
- ScrollView: Initially used for the goals list
- FlatList: Optimized list rendering for better performance
- Modal: For the goal input overlay
- Image: For app logo and visual elements

## App Structure
```
GoalsApp/
├── App.js                  # Main application component
├── components/
│   ├── GoalItem.js         # Individual goal component
│   └── GoalInput.js        # Goal input form in modal
├── assets/
│   └── images/             # App images
│       └── goal.png        # Goal image
└── App.json                # App configuration
```

## What I Learned
- How to structure a React Native application
- Component composition and state management
- Working with user input and handling keyboard
- Using FlatList for efficient rendering of lists
- Platform-specific styling and effects
- Modal screens and animation techniques
- The importance of breaking down UI into smaller components
- How to handle user interaction with proper feedback

## Screenshots
*Screenshots will be added here after completing the app*

## How to Run
1. Clone the repository
2. Install dependencies with `npm install`
3. Run with `npm start` or `expo start`
4. Scan the QR code with Expo Go app on your phone or use a simulator

## Notes and Observations
- The FlatList component is much more efficient than ScrollView for longer lists
- Modal components need careful handling of visibility state
- Adding visual feedback (like ripple effect) greatly improves user experience
- Breaking the UI into components early makes the code more maintainable
- StyleSheet API is powerful but requires a different mindset than CSS 