/* eslint-disable react/prop-types */
import * as S from './styles';
import React, { useState, useContext } from 'react';
import { useWindowDimensions } from 'react-native';
import { UserContext } from '@utils/UserContext';
import BackgroundImage from '@assets/Background.png';
import JabutiNelsonLogin from '@assets/JabutiNelson_Login2.jpg';
import KeyboardWrapper from '@components/KeyboardWrapper';

export default function Cadastro_I({ navigation }) {
  const { setName, setAge, setParental } = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userParental, setUserParental] = useState<string | null>(null);
  const { width, height } = useWindowDimensions();

  const handleDoLogin = () => navigation.navigate('login');

  const handleCadastroii = () => {
    setName(userName);
    setAge(userAge);
    setParental(userParental); // "pai" ou "mãe"
    navigation.navigate('cadastroii');
  };

  return (
    <S.Wrapper>
      <S.Background cwidth={width} source={BackgroundImage}>
        <S.Title cwidth={width}>Timo</S.Title>

        <S.Header>
          <S.Ballon>
            <S.BallonImage source={JabutiNelsonLogin} />
          </S.Ballon>
        </S.Header>

        <S.StyledText cwidth={width}>
          Oi, eu sou o Timo. Prazer em te conhecer!
        </S.StyledText>

        <KeyboardWrapper height={height}>
          <S.Wrapper_Input>
            <S.Input_Cadastro
              cwidth={width}
              placeholder="Qual o seu nome?"
              placeholderTextColor="#FFB381"
              value={userName}
              onChangeText={setUserName}
            />
            <S.Input_Cadastro
              cwidth={width}
              placeholder="Quantos anos você tem?"
              placeholderTextColor="#FFB381"
              value={userAge}
              onChangeText={setUserAge}
              keyboardType="numeric"
            />

            <S.Wrapper_Parental>
              <S.QuestionText>Você é pai ou mãe?</S.QuestionText>

              <S.OptionButton
                selected={userParental === 'pai'}
                onPress={() => setUserParental('pai')}
              >
                <S.OptionText selected={userParental === 'pai'}>Pai</S.OptionText>
              </S.OptionButton>

              <S.OptionButton
                selected={userParental === 'mãe'}
                onPress={() => setUserParental('mãe')}
              >
                <S.OptionText selected={userParental === 'mãe'}>Mãe</S.OptionText>
              </S.OptionButton>
            </S.Wrapper_Parental>
          </S.Wrapper_Input>
        </KeyboardWrapper>

        <S.Wrapper_Info>
          <S.Text_HaveAccount cwidth={width}>Já tem uma conta? </S.Text_HaveAccount>
          <S.Wrapper_DoLogin onPress={handleDoLogin}>
            <S.DoLogin cwidth={width}>Faça login</S.DoLogin>
          </S.Wrapper_DoLogin>
        </S.Wrapper_Info>

        <S.Button_continuar
          onPress={handleCadastroii}
          disabled={userName === '' || userAge === '' || userParental === null}
        >
          <S.Login_Button>CONTINUAR</S.Login_Button>
        </S.Button_continuar>
      </S.Background>
    </S.Wrapper>
  );
}
