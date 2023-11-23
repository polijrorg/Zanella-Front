import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '@screens/Main';
import Diario from '@screens/Diario';
import Assuntos from '@screens/Assuntos';
import Forum from '@screens/Forum';
import Perfil from '@screens/Perfil';
import Interesses from '@screens/Interesses';
import Assunto from '@screens/Assunto';

const { Navigator, Screen } = createNativeStackNavigator();

export function PrivateRoutes(){
  return (
    <Navigator initialRouteName='main' screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent'} }}>
      <Screen name="main" component={Main} />
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