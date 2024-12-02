import * as S from './styles';
import React, { useState, useContext} from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { UserContext } from '@utils/UserContext';


const Cadastro_I = ({ navigation }) => {

  const { setName, setAge, setParental, name, age, parental } = useContext(UserContext);
  
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userParental, setUserParental] = useState("");
  const { width, height } = useWindowDimensions();
    
  function handleDoLogin() {
    navigation.navigate('login');
  };

  const handleCadastroii = () => {
    setName(userName);
    setAge(userAge);
    setParental(userParental);
    navigation.navigate('cadastroii');
  };



  return(
  <S.Wrapper>
    <S.Background cwidth={width} source={require('@assets/Background.png')}>
    <S.Title cwidth={width}>ComTato</S.Title>
   

    
    <S.Header>
      <S.Ballon>
        <S.BallonImage source={require('@assets/JabutiNelson_Login2.jpg')}/>
      </S.Ballon>
    </S.Header>
      
      <S.StyledText cwidth={width}>{"Oi, eu sou o Nelson. Prazer em te conhecer!"}</S.StyledText>

      {Platform.OS === 'ios' ? (
        <S.KeyboardWrapper
        keyboardVerticalOffset={height * 0.08}
        behavior='position'
        >
          <S.Wrapper_Input>
            <S.Input_Cadastro 
              cwidth={width}
              placeholder='Qual o seu nome?'
              placeholderTextColor="#FFB381" 
              value={userName}
              onChangeText={(value) => setUserName(value)
              }/>
            <S.Input_Cadastro 
              cwidth={width}
              placeholder='Quantos anos você tem?'
              placeholderTextColor="#FFB381" 
              value={userAge}
              onChangeText={(value) => setUserAge(value)
              }/>
            <S.Input_Cadastro
              cwidth={width}
              placeholder='Você é pai/mãe?'
              placeholderTextColor="#FFB381" 
              value={userParental}
              onChangeText={(value) => setUserParental(value)
              }/>
          </S.Wrapper_Input>
         </S.KeyboardWrapper>
      ) : (
        <S.Wrapper_Input>
          <S.Input_Cadastro 
            cwidth={width}
            placeholder='Qual o seu nome?'
            placeholderTextColor="#FFB381" 
            value={userName}
            onChangeText={(value) => setUserName(value)
            }/>
          <S.Input_Cadastro 
            cwidth={width}
            placeholder='Quantos anos você tem?'
            placeholderTextColor="#FFB381" 
            value={userAge}
            onChangeText={(value) => setUserAge(value)
            }/>
          <S.Input_Cadastro
            cwidth={width}
            placeholder='Você é pai/mãe?'
            placeholderTextColor="#FFB381" 
            value={userParental}
            onChangeText={(value) => setUserParental(value)
            }/>
        </S.Wrapper_Input>
      )} 
      <S.Wrapper_Info>
        <S.Text_HaveAccount cwidth={width}>Já tem uma conta? </S.Text_HaveAccount>
        <S.Wrapper_DoLogin onPress={handleDoLogin}>
          <S.DoLogin cwidth={width}>Faça login</S.DoLogin>
        </S.Wrapper_DoLogin>
      </S.Wrapper_Info>
      
      <S.Button_continuar onPress={handleCadastroii} disabled={ userName == "" || userAge == "" || userParental == "" ? true : false } >
        <S.Login_Button>CONTINUAR</S.Login_Button>
      </S.Button_continuar>
  
    </S.Background>
  </S.Wrapper>
  )
};

export default Cadastro_I;
