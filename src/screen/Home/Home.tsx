import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeScreen} from '../../component';
import {useNavigation, useRoute} from '@react-navigation/native';

const Home = ({navigation}) => {
  const {container, touchableStyle, text} = styles;

  return (
    <SafeScreen>
      <Text style={text}>Home Body</Text>
      <TouchableOpacity
        style={touchableStyle}
        onPress={() => navigation.navigate('Settings')}>
        <Text>GO to Settings</Text>
      </TouchableOpacity>
    </SafeScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'black',
  },
  touchableStyle: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 3,
    padding: 3,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
  },
});
