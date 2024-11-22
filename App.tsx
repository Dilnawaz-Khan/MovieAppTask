import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS} from '@constants';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontFamily: FONTS.POPPINS_BLACK}}>App</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
