import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {counterContext} from '../../context/CounterContext';

const Child = () => {
  const state = useContext(counterContext);

  const {container, textStyle, btnStyle} = styles;

  return (
    <View style={container}>
      <Text style={textStyle}>Home</Text>
      <Text style={textStyle}>{state.count}</Text>
      <TouchableOpacity
        style={btnStyle}
        onPress={() => state.setCount(count => count + 1)}>
        <Text style={textStyle}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Child;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
  },
  btnStyle: {
    borderWidth: 2,
  },
});
