import React from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading'

import {
useFonts,
Poppins_400Regular,
Poppins_500Medium,
Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { Container } from './styles';

export function Dashboard(){
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return(
    <Container>
      <Text>Dashboard</Text>
    </Container>
  )
}

