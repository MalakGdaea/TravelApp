import React from 'react';
import Home from './src/screens/Home';
import { SafeAreaView, StyleSheet } from 'react-native';


function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
