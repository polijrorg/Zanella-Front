import AppProvider from '@hooks/index';
import React from 'react';
import { useFonts } from '@expo-google-fonts/poppins';
import { Rotas } from './src/routes';
import UserContextProvider from '@utils/UserContext';
import { AuthProvider } from '@hooks/useAuth';
export default function App() {

  const [fontsLoaded] = useFonts({
    "PoppinsExtraLight": require('./public/fonts/Poppins-ExtraLight.ttf'),
    "PoppinsLight": require('./public/fonts/Poppins-Light.ttf'),
    "PoppinsMedium": require('./public/fonts/Poppins-Medium.ttf'),
    "Poppins": require('./public/fonts/Poppins-Regular.ttf'),
    "PoppinsSemiBold": require('./public/fonts/PoppinsSemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <AuthProvider>
        <UserContextProvider>
          <Rotas />
        </UserContextProvider>
      </AuthProvider>
    </AppProvider>
  );
}
