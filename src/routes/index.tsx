import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import * as S from './styles';

export function Rotas() {

  return (
    <S.View_Back>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </S.View_Back>
);
};

export default Rotas;
