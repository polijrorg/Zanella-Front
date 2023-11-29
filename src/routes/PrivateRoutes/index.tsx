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
import useAuth from '@hooks/useAuth';

const { Navigator, Screen } = createNativeStackNavigator();

export function PrivateRoutes(){
  const { user } = useAuth();
  const [isFirstAccess, setIsFirstAccess] = useState(true);

  useEffect(() => {
    const topics = JSON.parse(user.topics)
    if (topics && topics.length > 0) {
      setIsFirstAccess(false);
    }
    console.log('userTopics', topics);
    console.log('userTopics.length', topics.length)
    console.log(isFirstAccess);
  }, [user])

  return (
    <Navigator initialRouteName={ isFirstAccess ? 'topics' : 'main'} screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent'} }}>
      <Screen name="main" component={Main} />
      <Screen name="topics" component={Topics} />
      <Screen name="diario" component={Diario} />
      <Screen name="assuntos" component={Assuntos} />
      <Screen name="forum" component={Forum} />
      <Screen name="perfil" component={Perfil} />
      <Screen name="interesses" component={Interesses} />
      <Screen name="assunto" component={Assunto} />
    </Navigator>
  );
};

export default PrivateRoutes;