import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.app}>
        <AddEntry />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginTop: 50
  }
})