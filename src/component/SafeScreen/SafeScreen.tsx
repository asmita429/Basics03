import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const SafeScreen = ({children, ...props}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {container, textStyle} = styles;
  return (
    <SafeAreaView style={container} {...props}>
      {route.name !== 'Home' && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={textStyle}>{'<-'}</Text>
        </TouchableOpacity>
      )}
      {children}
    </SafeAreaView>
  );
};

export default SafeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textStyle: {
    fontSize: 30,
  },
});
