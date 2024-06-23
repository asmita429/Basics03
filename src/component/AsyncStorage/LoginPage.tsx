import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authContext} from '../../context/AuthContext';

const LoginPage = () => {
  const [data, setData] = useState({
    user: '',
    password: '',
  });

  const authObj = useContext(authContext);

  const {
    container,
    headingStyle,
    touchableStyle,
    btnStyle,
    inputFieldStyle,
    textStyle,
  } = styles;

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('token', jsonValue);
    } catch (e) {
      console.log(e);
    } finally {
      console.log(data.user);
      console.log(data.password);
      setData({user: null, password: null});
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token');
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log(e);
    }
    console.log('Removed all data');
    setData({user: null, password: null});
  };

  const authenticate = async () => {
    const storedData = await getData();
    // console.log(JSON.parse(storedData));
    try {
      if (
        storedData.user === data.user &&
        storedData.password === data.password
      ) {
        console.log('matched');
        authObj.setAuth(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const storedData = await getData();
      if (storedData) {
        setData(storedData);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={container}>
      <Text style={headingStyle}>Login Page</Text>
      <TextInput
        returnKeyType="next"
        value={data.user}
        onChangeText={value =>
          setData(prevState => ({...prevState, user: value}))
        }
        style={inputFieldStyle}
      />
      <TextInput
        returnKeyType="done"
        value={data.password}
        secureTextEntry={true}
        keyboardType="numeric"
        onChangeText={value => {
          setData(prevState => ({...prevState, password: value}));
        }}
        style={inputFieldStyle}
      />
      <View style={btnStyle}>
        <TouchableOpacity
          onPress={() => {
            storeData(data);
            authenticate();
          }}
          style={touchableStyle}>
          <Text style={textStyle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeData} style={touchableStyle}>
          <Text style={textStyle}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
  },
  inputFieldStyle: {
    borderWidth: 2,
    borderRadius: 10,
    width: '100%',
    margin: 5,
    fontSize: 26,
  },
  btnStyle: {
    flexDirection: 'row',
    margin: 10,
    gap: 30,
  },
  touchableStyle: {
    backgroundColor: 'green',
    borderWidth: 2,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
  },
  textStyle: {
    fontSize: 22,
    color: 'white',
  },
});
