import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Nelson_Ballon from '@components/Nelson_Balloon';
import Button from '@components/Button';
import Input from '@components/Input';
import { useNavigation } from '@react-navigation/native';


export function Login(props) {
  
  function handleCadastre() {
      props.navigation.navigate('cadastroi');
  };


  return (
    <S.Wrapper>
      <S.Lines_Sup_Esq source={require('../../../public/assets/Lines_Sup_Es.png')}/>
      <S.Lines_Sup_Dir source={require('../../../public/assets/Lines_Sup_Dir.png')}/>
      <S.Lines_Inf_Esq source={require('../../../public/assets/Lines_Inf_Es.png')}/>
      <S.Lines_Inf_Dir source={require('../../../public/assets/Lines_Inf_Dir.png')}/>
      <StatusBar style="dark" />
      <S.Title>ComTato</S.Title>
      <Nelson_Ballon/>
      <S.StyledText>É bom ter você aqui!</S.StyledText>
      <S.Text_Login>Login</S.Text_Login>
      <S.Wrapper_Input>
        <Input placeholder='Email' />
        <Input placeholder='Senha' />
      </S.Wrapper_Input>
      <S.Wrapper_Info>
        <S.Text_DontHaveAccount>Não tem uma conta? </S.Text_DontHaveAccount>
        <S.Wrapper_Cadastro onPress={handleCadastre}>
        <S.Cadastrar>Cadastre-se</S.Cadastrar>
        </S.Wrapper_Cadastro>
      </S.Wrapper_Info>
      <Button text='ENTRAR' />
      
    </S.Wrapper>
  )
};
export default Login;
