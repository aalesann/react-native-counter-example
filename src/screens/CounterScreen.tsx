import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {counter}</Text>

      <Fab title="-1" onPress={() => setCounter(counter - 1)} position="bl" />

      <Fab title="+1" onPress={() => setCounter(counter + 1)} position="br" />

      {/* <TouchableOpacity style={styles.fabLocationBR} onPress={increment}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    top: -45,
  },
});
