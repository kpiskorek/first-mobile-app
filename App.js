import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text>siema tu piotrek tu moja aplikacja!</Text>
      <Button
        onPress={() => setCount((count) => count - 1)}
        title={'Count is ' + count}
      />
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
});
