import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeScreen} from '../../component';

const Profile = ({navigation}) => {
  const {touchableStyle} = styles;
  return (
    <SafeScreen>
      <Text>This is inside Profile</Text>
      <TouchableOpacity
        style={touchableStyle}
        onPress={() => navigation.goBack()}>
        <Text>go back</Text>
      </TouchableOpacity>
    </SafeScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  touchableStyle: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 3,
    padding: 3,
    alignItems: 'center',
  },
});
