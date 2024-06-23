import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from './SplashScreenComponent';
import {LoginPageScreen, TopParent} from '../index';
import {authContext} from '../../context/AuthContext';

const url1 = 'https://jsonplaceholder.typicode.com/photos';
const url2 = 'https://jsonplaceholder.typicode.com/todos';
const url3 = 'https://jsonplaceholder.typicode.com/comments';

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [auth, setAuth] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const apiPromises = [fetch(url1), fetch(url2), fetch(url3)];

      const responses = await Promise.all(apiPromises);
      const dataPromises = responses.map(res => res.json());

      const result = await Promise.all(dataPromises);
      // console.log('new data => ', result[0]);

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <authContext.Provider value={{auth, setAuth}}>
      {isLoading ? (
        <SplashScreen />
      ) : auth ? (
        <TopParent />
      ) : (
        <LoginPageScreen />
      )}
    </authContext.Provider>
  );
};

export default Main;

const styles = StyleSheet.create({});
