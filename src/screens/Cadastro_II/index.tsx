import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import Nelson_Ballon from '@components/Nelson_Balloon';
import Button from '@components/Button';
import Input from '@components/Input';
import { api } from '@services/api';
import { UserContext } from '@utils/UserContext';
import { TouchableOpacity } from 'react-native';


const Cadastro_II = ({navigation}) => {

  const { name,  age,  parental } = useContext(UserContext);
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  console.log("variaveiss", name, age, parental );


  async function signUp() {
    console.log("Entrou na função");
    try {
      const { data } = await api.post('/users/register', {
        name: name,
        age: age,
        parental_role: parental,
        phone: userPhone,
        email: userEmail,
        password: userPassword
      });

      console.log("A requisição deu certo:", data);
    } catch (error) {
      console.log(error);
    }
}

  return(
    
  <S.Wrapper>
    <S.Title>ComTato</S.Title>

    <S.Container>
      <Nelson_Ballon/>
      
      <S.StyledText>Estamos quase lá!</S.StyledText>
      
      <S.Wrapper_Input>
        <S.Input_Description>Como você se descreveria?</S.Input_Description>
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
      <TouchableOpacity onPress={signUp}>
        <Button text='CADASTRAR' />
      </TouchableOpacity>
    </S.Container>
    
  </S.Wrapper>
)
};

export default Cadastro_II;
