import { NavigationContainer } from '@react-navigation/native';
import * as S from './styles';
import { useEffect, useState } from 'react';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import useAuth from '@hooks/useAuth';
import NavBar from '@components/Navbar';
import Header from '@components/Header';
import { Platform } from 'react-native';


export function Rotas() {
  const { user, loading } = useAuth();
  const [route, setRoute] = useState('public');
  const [OS, setOS] = useState('');
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
    if (Platform.OS === 'ios') {
      setOS('ios')
    } else {
      setOS('android')
    }
    
  }, [loading, user])

  return (
    <S.View_Back OS={OS} >
        {OS === 'ios' 
          ? <S.Status barStyle='dark-content' translucent />
          : <S.Status barStyle='light-content' />
        }
        <NavigationContainer>
          {route === 'private' && (<Header />)}
          {routes[route]}
          {route === 'private' && (<NavBar />)}
        </NavigationContainer>
    </S.View_Back>
  );
};

export default Rotas;

