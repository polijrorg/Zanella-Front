import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Nelson_Ballon from '@components/Nelson_Balloon';
import Button from '@components/Button';
import Input from '@components/Input';
import useAuth from '@hooks/useAuth';

export function Login({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn } = useAuth();


  const handleCadastre = () => {
    navigation.navigate('cadastroi');
  };

  const handleSignIn = async () => {
    await signIn({ email, password });
  }

  return (
    <S.Wrapper>
      <S.Background source={require('@assets/Background.png')}>

      <S.Title>ComTato</S.Title>
      <Nelson_Ballon/>
      <S.StyledText>É bom ter você aqui!</S.StyledText>
      <S.Text_Login>Login</S.Text_Login>
      <S.Wrapper_Input>
        <Input placeholder='Email' stateFunction={setEmail} type='email-address'/>
        <Input placeholder='Senha' stateFunction={setPassword}/>
      </S.Wrapper_Input>
      <S.Wrapper_Info>
        <S.Text_DontHaveAccount>Não tem uma conta? </S.Text_DontHaveAccount>
        <S.Wrapper_Cadastro onPress={handleCadastre}>
        <S.Cadastrar>Cadastre-se</S.Cadastrar>
        </S.Wrapper_Cadastro>
      </S.Wrapper_Info>
      <Button text='ENTRAR' onPress={handleSignIn} style='solido' size='regular' />
      </S.Background>
    </S.Wrapper>
  )
};
export default Login;
