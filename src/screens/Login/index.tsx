import * as S from './styles';
import React from 'react';
import Nelson_Ballon from '@components/Nelson_Balloon';
import Button from '@components/Button';
import Input from '@components/Input';
import useAuth from '@hooks/useAuth';
import { Platform, useWindowDimensions } from 'react-native';

export function Login({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn } = useAuth();
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);

  const { height } = useWindowDimensions();

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
      {Platform.OS === 'ios' ? (
        <S.KeyboardWrapper
        keyboardVerticalOffset={height * 0.1}
        behavior='position'
        >
          <S.Wrapper_Input>
            <Input placeholder='Email' stateFunction={setEmail} type='email-address'/>
            <S.Input_Password_Wrapper>
              <S.Input_Password
                placeholder='Senha'
                secureTextEntry={!passwordVisibility}
                placeholderTextColor="#FFB381"
                onChangeText={(value) => setPassword(value)}>
              </S.Input_Password>
              <S.Input_Password_Icon_Button onPress={() => setPasswordVisibility(!passwordVisibility)}>
                <S.Input_Password_Icon source={passwordVisibility ? require('@assets/visibility_off.png') : require('@assets/visibility.png')}/>
              </S.Input_Password_Icon_Button>
            </S.Input_Password_Wrapper>
          </S.Wrapper_Input>
        </S.KeyboardWrapper>
      ) : (
        <S.Wrapper_Input>
          <Input placeholder='Email' stateFunction={setEmail} type='email-address'/>
          <S.Input_Password_Wrapper>
            <S.Input_Password
              placeholder='Senha'
              secureTextEntry={!passwordVisibility}
              placeholderTextColor="#FFB381"
              onChangeText={(value) => setPassword(value)}>
            </S.Input_Password>
            <S.Input_Password_Icon_Button onPress={() => setPasswordVisibility(!passwordVisibility)}>
              <S.Input_Password_Icon source={passwordVisibility ? require('@assets/visibility_off.png') : require('@assets/visibility.png')}/>
            </S.Input_Password_Icon_Button>
          </S.Input_Password_Wrapper>
        </S.Wrapper_Input>
      )}
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
