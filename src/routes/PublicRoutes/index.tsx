import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@screens/Login';
import Cadastro_I from '@screens/Cadastro_I';
import Cadastro_II from '@screens/Cadastro_II';


const { Navigator, Screen } = createNativeStackNavigator();

export function PublicRoutes(){
  return (
    <Navigator initialRouteName='login' screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent'} }}>
      <Screen name="login" component={Login}/>
      <Screen name="cadastroi" component={Cadastro_I} />
      <Screen name="cadastroii" component={Cadastro_II} />
    </Navigator>
  );
};

export default PublicRoutes;