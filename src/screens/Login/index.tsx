/* eslint-disable react/prop-types */
 
import React from 'react';
import * as S from './styles';
import Nelson_Ballon from '@components/Nelson_Balloon';
import Button from '@components/Button';
import Input from '@components/Input';
import useAuth from '@hooks/useAuth';
import { useWindowDimensions, Alert } from 'react-native';
import BackgroundImage from '@assets/Background.png';
import KeyboardWrapper from '@components/KeyboardWrapper';
import visibilityIcon from '@assets/visibility.png';
import visibilityOffIcon from '@assets/visibility_off.png';
 
export function Login({ navigation }) {
  const { signIn } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const { width, height } = useWindowDimensions();

  const handleSignIn = async () => {
    try {
      await signIn({ email, password });
    } catch (error) {
      Alert.alert('Erro', error?.message || 'Falha ao entrar');
    }
  };

  const handleCadastre = () => {
    navigation.navigate('cadastroi');
  };

  return (
    <S.Wrapper>
      <S.Background source={BackgroundImage}>
        <S.Title cwidth={width}>Timo</S.Title>
        <Nelson_Ballon />
        <S.StyledText>É bom ter você aqui!</S.StyledText>
        <S.Text_Login cwidth={width}>Login</S.Text_Login>

        <KeyboardWrapper height={height}>
          <S.Wrapper_Input>
            <Input placeholder='Email' stateFunction={setEmail} type='email-address' />
            <S.Input_Password_Wrapper>
              <S.Input_Password
                placeholder='Senha'
                secureTextEntry={!passwordVisibility}
                placeholderTextColor="#FFB381"
                onChangeText={setPassword}
              />
              <S.Input_Password_Icon_Button onPress={() => setPasswordVisibility(!passwordVisibility)}>
                <S.Input_Password_Icon source={passwordVisibility ? visibilityOffIcon : visibilityIcon} />
              </S.Input_Password_Icon_Button>
            </S.Input_Password_Wrapper>
          </S.Wrapper_Input>
        </KeyboardWrapper>

        <S.Wrapper_Info cwidth={width}>
          <S.Text_DontHaveAccount cwidth={width}>Não tem uma conta?</S.Text_DontHaveAccount>
          <S.Wrapper_Cadastro onPress={handleCadastre}>
            <S.Cadastrar cwidth={width}>Cadastre-se</S.Cadastrar>
          </S.Wrapper_Cadastro>
        </S.Wrapper_Info>

        <Button text='ENTRAR' onPress={handleSignIn} style='solido' size='regular' />
      </S.Background>
    </S.Wrapper>
  );
}

export default Login;
