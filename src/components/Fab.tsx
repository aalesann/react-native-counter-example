import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback} from 'react-native';

interface Props {
  position?: 'br' | 'bl';
  title: string;
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  return (
    <View
      style={[
        styles.fabLocationL,
        position === 'bl' ? styles.left : styles.rigth,
      ]}
    >
      <TouchableNativeFeedback 
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('#28429F', false, 30)}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fabLocationL: {
    position: 'absolute',
    bottom: 25,
  },
  left: {
    left: 25,
  },
  rigth: {
    right: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 8,
  },
  fabText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
