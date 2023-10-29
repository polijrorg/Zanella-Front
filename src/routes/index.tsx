import { NavigationContainer } from '@react-navigation/native';
import * as S from './styles';
import { useEffect, useState } from 'react';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuth from '@hooks/useAuth';
import UserService, { ILoginRequest } from '@services/UserService';

export function Rotas() {
  const { user, loading } = useAuth();

  const [route, setRoute] = useState('public');

  const routes = {
    public: <PublicRoutes />,
    private: <PrivateRoutes />,
  }

  const getRoutes = async() => {
    if (!loading && user) {
      setRoute('private');
    } else {
      setRoute('public')
    }
  }

  useEffect(() => {
    getRoutes();
    console.log(route, loading, user)
  }, [loading, user])

  return (
    <S.View_Back>
      <S.Background source={require('@assets/Background.png')}>
        <S.Status />
        <NavigationContainer>
          {routes[route]}
        </NavigationContainer>
      </S.Background>
    </S.View_Back>
  );
};

export default Rotas;

