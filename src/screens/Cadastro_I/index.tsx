import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext} from 'react';
import Nelson_Ballon from '@components/Nelson_Balloon';
import Button from '@components/Button';
import Input from '@components/Input';
import { TouchableOpacity } from 'react-native';
import { api } from '@services/api';
import { UserContext } from '@utils/UserContext';


const Cadastro_I = (props) => {

  const { setName, setAge, setParental} = useContext(UserContext);
  
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userParental, setUserParental] = useState("");
    
  function handleDoLogin() {
    props.navigation.navigate('login');
  };

  function handleCadastroii() {
    console.log("antes");
    setName(userName);
    setAge(userAge);
    setParental(userParental);
    console.log("depois");
    props.navigation.navigate('cadastroii');
  };



  return(
  <S.Wrapper>
    <S.Lines_Sup_Esq source={require('../../../public/assets/Lines_Sup_Es.png')}/>
    <S.Lines_Sup_Dir source={require('../../../public/assets/Lines_Sup_Dir.png')}/>
    <S.Lines_Inf_Esq source={require('../../../public/assets/Lines_Inf_Es.png')}/>
    <S.Lines_Inf_Dir source={require('../../../public/assets/Lines_Inf_Dir.png')}/>
    <StatusBar style="dark" />
    <S.Title>ComTato</S.Title>
   

    <S.Container>
      <Nelson_Ballon/>
      
      <S.StyledText>Oi, eu sou o Nelson!</S.StyledText>
      <S.StyledText>Prazer em te conhecer!</S.StyledText>
      
      <S.Wrapper_Input>
        <S.Input_Cadastro 
          placeholder='Qual o seu nome?'
          placeholderTextColor="#FFB381" 
          value={userName}
          onChangeText={(value) => setUserName(value)
        }/>
        <S.Input_Cadastro 
          placeholder='Quantos anos você tem?'
          placeholderTextColor="#FFB381" 
          value={userAge}
          onChangeText={(value) => setUserAge(value)
        }/>
        <S.Input_Cadastro
          placeholder='Você é pai/mãe?'
          placeholderTextColor="#FFB381" 
          value={userParental}
          onChangeText={(value) => setUserParental(value)
      }/>
      </S.Wrapper_Input>
      
      <S.Wrapper_Info>
        <S.Text_HaveAccount>Já tem uma conta? </S.Text_HaveAccount>
        <S.Wrapper_DoLogin onPress={handleDoLogin}>
          <S.DoLogin>Faça login</S.DoLogin>
        </S.Wrapper_DoLogin>
      </S.Wrapper_Info>
      
      <S.Button_continuar onPress={handleCadastroii} >
        <S.Login_Button>CONTINUAR</S.Login_Button>
      </S.Button_continuar>
    </S.Container>
    
  </S.Wrapper>
  )
};

export default Cadastro_I;
