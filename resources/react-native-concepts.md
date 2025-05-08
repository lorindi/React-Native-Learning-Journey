# React Native Core Concepts

## Core Components

| React Native Component | Description | Web Equivalent |
|-----------------------|------------|---------------|
| `View` | A container component for other components, used for layout and styling | `div` |
| `Text` | Displays text, supports nesting, styling, and touch handling | `p`, `span` |
| `Image` | Displays images from various sources including local files and remote URLs | `img` |
| `ScrollView` | A scrollable container for components and views, best for limited content | `div` with overflow |
| `TextInput` | Allows user text input with various styling and validation options | `input`, `textarea` |
| `TouchableOpacity` | Creates a touchable element that fades on press | Button with hover effects |
| `FlatList` | High-performance scrolling list for large datasets with lazy loading | Virtual scrolling lists |
| `SectionList` | Like FlatList but with support for sections/headers | Sectioned virtual lists |
| `Modal` | A floating overlay that covers the screen for focused interactions | Modal dialogs |
| `Pressable` | Highly customizable touchable area with various interaction states | Interactive elements |
| `Button` | Simple button component with title and onPress handler | `button` |

## Working with Modal Components

```javascript
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

function MyModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide" // or "fade" or "none"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>This is a modal!</Text>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
```

## Working with Images

```javascript
import { Image, StyleSheet } from 'react-native';

// Local image
<Image source={require('./assets/logo.png')} style={styles.image} />

// Remote image (requires width and height)
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={{ width: 200, height: 200 }}
/>

// With loading indicator
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={styles.image}
  loadingIndicatorSource={require('./assets/placeholder.png')}
/>

// Resizing modes
<Image
  source={require('./assets/logo.png')}
  style={styles.image}
  resizeMode="cover" // or "contain", "stretch", "repeat", "center"
/>
```

## Styling in React Native

### StyleSheet API

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  }
});
```

### Layout Systems
- Flexbox
  - `flex`: Defines how items grow or shrink
  - `flexDirection`: 'row', 'row-reverse', 'column', 'column-reverse'
  - `justifyContent`: 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'
  - `alignItems`: 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'
  - `alignSelf`: Override alignItems for specific children
  - `flexWrap`: 'wrap', 'nowrap'

### Style Properties
- Dimensions: `width`, `height`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight`
- Margins: `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`, `marginHorizontal`, `marginVertical`
- Padding: `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `paddingHorizontal`, `paddingVertical`
- Borders: `borderWidth`, `borderColor`, `borderRadius`, etc.
- Position: `position` ('absolute', 'relative'), `top`, `right`, `bottom`, `left`

### Platform-Specific Styling
```javascript
// Option 1: Platform.select
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
});

// Option 2: Platform-specific files
// Component.ios.js and Component.android.js
```

### Platform-Specific UI Effects
```javascript
import { Pressable, Platform } from 'react-native';

// Android Ripple Effect with iOS alternative
<Pressable
  android_ripple={{ color: '#ccc' }}
  style={({ pressed }) => [
    styles.button,
    pressed && Platform.OS === 'ios' ? styles.buttonPressed : null
  ]}
  onPress={onPressHandler}
>
  {/* Button content */}
</Pressable>
```

## Navigation Patterns
- 
- 

## State Management
- 
- 

## Hooks
- 
- 

## Native Modules
- 
- 

## Performance Optimization
- 
- 

## Platform-Specific Code
- Platform.OS: Detect the operating system ('ios', 'android', 'web')
- Platform.select(): Select values according to the platform
- Platform-specific file extensions (.ios.js, .android.js)