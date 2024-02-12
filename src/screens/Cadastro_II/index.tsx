import * as S from './styles';
import React, {useState, useContext} from 'react';
import Button from '@components/Button';
import { api } from '@services/api';
import { UserContext } from '@utils/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, useWindowDimensions } from 'react-native';


const Cadastro_II = ({ navigation }) => {

  
  const { name, age, parental } = useContext(UserContext);
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const { height } = useWindowDimensions();

  async function signUp() {
    try {
      await api.post('/users/register', {
        name: name,
        age: age,
        parental_role: parental,
        phone: userPhone,
        email: userEmail,
        password: userPassword
      });

      await AsyncStorage.setItem('@app:isFirstAccess', 'true').then(
        () => {navigation.navigate('login')}
      );
    } catch (error) {
      console.log(error);
    }
  }

  return(  
    <S.Wrapper>
      <S.background source={require('@assets/Background.png')}>
      <S.Title>ComTato</S.Title>
      <S.Header>
        <S.Ballon>
          <S.BallonImage source={require('@assets/JabutiNelson_Dir.png')}/>
        </S.Ballon>
        <S.StyledText>Estamos quase lá!</S.StyledText>
      </S.Header>  
      {Platform.OS === 'ios' ? (
        <S.KeyboardWrapper
        keyboardVerticalOffset={height * 0.08}
        behavior='position'
        >
          <S.Wrapper_Input>
            <S.Input_Cadastro
              placeholder='Telefone (Opcional)'
              inputMode='text'
              keyboardType='number-pad'
              placeholderTextColor="#FFB381"
              value={userPhone}
              onChangeText={(value) => setUserPhone(value)}/>
            <S.Input_Cadastro
              placeholder='Qual o seu email?'
              inputMode='email'
              placeholderTextColor="#FFB381"
              value={userEmail}
              onChangeText={(value) => setUserEmail(value)}/>
            <S.Input_Password_Wrapper>
              <S.Input_Password
                placeholder='Crie uma senha!'
                secureTextEntry={!passwordVisibility}
                placeholderTextColor="#FFB381"
                value={userPassword}
                onChangeText={(value) => setUserPassword(value)}>
              </S.Input_Password>
              <S.Input_Password_Icon_Button onPress={() => setPasswordVisibility(!passwordVisibility)}>
                <S.Input_Password_Icon source={passwordVisibility ? require('@assets/visibility_off.png') : require('@assets/visibility.png')}/>
              </S.Input_Password_Icon_Button>
            </S.Input_Password_Wrapper>
          </S.Wrapper_Input>
        </S.KeyboardWrapper>
      ) : (
        <S.Wrapper_Input>
          <S.Input_Cadastro
            placeholder='Telefone (Opcional)'
            inputMode='text'
            keyboardType='number-pad'
            placeholderTextColor="#FFB381"
            value={userPhone}
            onChangeText={(value) => setUserPhone(value)}/>
          <S.Input_Cadastro
            placeholder='Qual o seu email?'
            inputMode='email'
            placeholderTextColor="#FFB381"
            value={userEmail}
            onChangeText={(value) => setUserEmail(value)}/>
          <S.Input_Password_Wrapper>
            <S.Input_Password
              placeholder='Crie uma senha!'
              secureTextEntry={!passwordVisibility}
              placeholderTextColor="#FFB381"
              value={userPassword}
              onChangeText={(value) => setUserPassword(value)}>
            </S.Input_Password>
            <S.Input_Password_Icon_Button onPress={() => setPasswordVisibility(!passwordVisibility)}>
              <S.Input_Password_Icon source={passwordVisibility ? require('@assets/visibility_off.png') : require('@assets/visibility.png')}/>
            </S.Input_Password_Icon_Button>
          </S.Input_Password_Wrapper>
        </S.Wrapper_Input>
      )}
      <Button text='CADASTRAR' onPress={signUp} style='solido' size='medium'/>
      </S.background>
    </S.Wrapper>
  )
};

export default Cadastro_II;
