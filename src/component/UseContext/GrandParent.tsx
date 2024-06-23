import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Parent from './Parent';

const GrandParent = () => {
  return <Parent />;
};

export default GrandParent;

const styles = StyleSheet.create({});
