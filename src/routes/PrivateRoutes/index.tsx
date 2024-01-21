import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '@screens/Main';
import Diario from '@screens/Diario';
import Assuntos from '@screens/Assuntos';
import Forum from '@screens/Forum';
import Perfil from '@screens/Perfil';
import Interesses from '@screens/Interesses';
import Assunto from '@screens/Assunto';
import Topics from '@screens/Topics';
import TopicsSelection from '@screens/TopicsSelection';
import Subjects from '@screens/Subjects';
import useAuth from '@hooks/useAuth';

const { Navigator, Screen } = createNativeStackNavigator();

export function PrivateRoutes(){
  const { topics } = useAuth();

  return (
    <Navigator initialRouteName={ topics.length > 0 ? 'topics' : 'main'} screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent'} }}>
      <Screen name="main" component={Main} />
      <Screen name="topics" component={Topics} />
      <Screen name="diario" component={Diario} />
      <Screen name="assuntos" component={Assuntos} />
      <Screen name="forum" component={Forum} />
      <Screen name="perfil" component={Perfil} />
      <Screen name="interesses" component={Interesses} />
      <Screen name="assunto" component={Assunto} />
      <Screen name="selection" component={TopicsSelection} />
      <Screen name='subjects' component={Subjects} />
    </Navigator>
  );
};

export default PrivateRoutes;