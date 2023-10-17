import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Nelson_Ballon from '@components/Nelson_Balloon';
import Button from '@components/Button';
import Input from '@components/Input';
import { api } from '@services/api';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import UserService from '@services/UserService';

export function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  function handleCadastre() {
      props.navigation.navigate('cadastroi');
  };

  const signIn = async () => {
    try {
      const response = await UserService.login({ email, password });
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
    // props.navigation.navigate('home');
  }

  return (
    <S.Wrapper>
      <S.Title>ComTato</S.Title>
      <Nelson_Ballon/>
      <S.StyledText>É bom ter você aqui!</S.StyledText>
      <S.Text_Login>Login</S.Text_Login>
      <S.Wrapper_Input>
        <Input placeholder='Email' stateFunction={setEmail} />
        <Input placeholder='Senha' stateFunction={setPassword}/>
      </S.Wrapper_Input>
      <S.Wrapper_Info>
        <S.Text_DontHaveAccount>Não tem uma conta? </S.Text_DontHaveAccount>
        <S.Wrapper_Cadastro onPress={handleCadastre}>
        <S.Cadastrar>Cadastre-se</S.Cadastrar>
        </S.Wrapper_Cadastro>
      </S.Wrapper_Info>
      <Button text='ENTRAR' onPress={signIn} />
    </S.Wrapper>
  )
};
export default Login;
