import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text> This is SplashScreen</Text>
      <Text>Loading...</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
