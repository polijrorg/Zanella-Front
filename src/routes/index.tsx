import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Platform, View } from 'react-native';
import * as S from './styles';
import useAuth from '@hooks/useAuth';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import NavBar from '@components/Navbar';
import Header from '@components/Header';

export function Rotas() {
  const { user, loading } = useAuth();
  const [OS, setOS] = useState('');

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setOS('ios');
    } else {
      setOS('android');
    }
  }, []);

  if (loading) {
    return <ActivityIndicator size={48} />
  }

  const isPrivate = !!user;

  return (
    <S.View_Back OS={OS}>
      {OS === 'ios' ? (
        <S.Status barStyle="dark-content" translucent />
      ) : (
        <S.Status barStyle="light-content" />
      )}

      <NavigationContainer>
        {isPrivate && <Header />}
        <View style={{ paddingBottom: isPrivate ? 32 : 0, flex: 1 }}>
          {isPrivate ? <PrivateRoutes /> : <PublicRoutes />}
        </View>
        {isPrivate && <NavBar />}
      </NavigationContainer>
    </S.View_Back>
  );
}

export default Rotas;
