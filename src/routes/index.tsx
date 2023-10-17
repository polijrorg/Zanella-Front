import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import * as S from './styles';

export function Rotas() {

  return (
    <S.View_Back>
      <S.Background source={require('@assets/Background.png')}>
        <S.Status />
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </S.Background>
    </S.View_Back>
  );
};

export default Rotas;
