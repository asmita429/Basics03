import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import GrandParent from './GrandParent';
import {counterContext} from '../../context/CounterContext';

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{count, setCount}}>
      <GrandParent />
    </counterContext.Provider>
  );
};

export default Main;

const styles = StyleSheet.create({});
