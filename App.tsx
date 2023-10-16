import AppProvider from '@hooks/index';
import React from 'react';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Rotas } from './src/routes';
export default function App() {

  const [fontsLoaded] = useFonts({
    PoppinsExtraLight: require('./public/fonts/Poppins-ExtraLight.ttf'),
    PoppinsLight: require('./public/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('./public/fonts/Poppins-Medium.ttf'),
    Poppins: require('./public/fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold: require('./public/fonts/PoppinsSemiBold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <Rotas />
    </AppProvider>
  );
}
