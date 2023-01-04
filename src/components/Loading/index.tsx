import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

export function Loading(){
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0D0D0D',
    }}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <ActivityIndicator size={'large'} color="#D9D9D9" />
    </View>
  );
}