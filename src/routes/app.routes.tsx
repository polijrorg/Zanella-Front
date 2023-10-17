import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@screens/Login';
import Cadastro_I from '@screens/Cadastro_I';
import Cadastro_II from '@screens/Cadastro_II';
import Main from '@screens/Main';
import Diario from '@screens/Diario';
import Assuntos from '@screens/Assuntos';
import Forum from '@screens/Forum';
import Perfil from '@screens/Perfil';
import Interesses from '@screens/Interesses';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as S from './styles';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return (
    <Navigator initialRouteName='login' screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent'} }}>
      <Screen name="login" component={Login}/>
      <Screen name="cadastroi" component={Cadastro_I} />
      <Screen name="cadastroii" component={Cadastro_II} />
      <Screen name="main" component={Main} />
      <Screen name="diario" component={Diario} />
      <Screen name="assuntos" component={Assuntos} />
      <Screen name="forum" component={Forum} />
      <Screen name="perfil" component={Perfil} />
      <Screen name="interesses" component={Interesses} />
    </Navigator>
  );
};

export default AppRoutes;