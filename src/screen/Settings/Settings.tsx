import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeScreen} from '../../component';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Settings = ({navigation}) => {
  const {touchableStyle} = styles;
  return (
    <SafeScreen>
      <Text>This is inside Settings</Text>
      <TouchableOpacity
        style={touchableStyle}
        onPress={() => navigation.navigate('Profile')}>
        <Text>Goto Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={touchableStyle}
        onPress={() => navigation.goBack()}>
        <Text>go back</Text>
      </TouchableOpacity>
    </SafeScreen>
  );
};

export default Settings;

const styles = StyleSheet.create({
  touchableStyle: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 3,
    padding: 3,
    alignItems: 'center',
  },
});
