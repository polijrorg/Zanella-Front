import * as S from './styles';
import React, {useState, useContext} from 'react';
import Button from '@components/Button';
import { api } from '@services/api';
import { UserContext } from '@utils/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Cadastro_II = ({ navigation }) => {

  
  const { name, age, parental } = useContext(UserContext);
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  
  console.log('cadastro 2')

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
      <S.Wrapper_Input>
          <S.Input_Description 
            placeholder='Como você se descreveria?'
            placeholderTextColor="#FFB381" />
          <S.Input_Cadastro
            placeholder='Pode me passar seu telefone?'
            placeholderTextColor="#FFB381"
            value={userPhone}
            onChangeText={(value) => setUserPhone(value)}/>
          <S.Input_Cadastro
            placeholder='Qual o seu email?'
            placeholderTextColor="#FFB381"
            value={userEmail}
            onChangeText={(value) => setUserEmail(value)}/>
          <S.Input_Cadastro
            placeholder='Crie uma senha!'
            placeholderTextColor="#FFB381"
            value={userPassword}
            onChangeText={(value) => setUserPassword(value)}/>
        </S.Wrapper_Input>
        <Button text='CADASTRAR' onPress={signUp} style='solido' size='medium'/>
      </S.background>
    </S.Wrapper>
  )
};

export default Cadastro_II;
