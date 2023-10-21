import React, { useEffect, useState } from 'react';
import * as S from './styles';
import UpdateAttribute from '@components/UpdateAttribute';
import Button from '@components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '@services/api';
import User from '@interfaces/User';

interface ModalProps {
  visible: boolean;
  onRequestClose(): void;
}

const UpdateModal: React.FC<ModalProps> = ({ visible, onRequestClose }) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [parentalRole, setParentalRole] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);

  const update = async (user: User): Promise<User> => {
    try {
      const response = await api.patch('/users/update', user, {
        headers: { Authorization: `Bearer ${await AsyncStorage.getItem('@app:token')}` }
      });
      
      await AsyncStorage.setItem('@app:userName', response.data.name);
      await AsyncStorage.setItem('@app:userAge', response.data.age);
      await AsyncStorage.setItem('@app:userRole', response.data.parental_role);
      await AsyncStorage.setItem('@app:userDescription', response.data.description || "null");
      await AsyncStorage.setItem('@app:userPhone', response.data.phone || "null");
      await AsyncStorage.setItem('@app:userEmail', response.data.email);

      const updatedUser: User = {
        name: response.data.name,
        age: response.data.age,
        parental_role: response.data.parental_role,
        description: response.data.description,
        phone: response.data.phone,
        email: response.data.email,
      };

      console.log(updatedUser);
      return updatedUser;
    } catch (error) {
      console.log(error);
    }
  }

  const atributtes = [
    "Nome",
    "Idade",
    "Grau de Parentesco",
    "Descrição",
    "E-mail",
    "Telefone",
    "Senha",
  ]
  
  const user: User = {
    name, 
    age, 
    parental_role: parentalRole,
    description,
    email,
    phone, 
    password,
  }

  useEffect((): any => {
    const asArray = Object.entries(user);
    const filtered = asArray.filter(([key, value]) => value !== '');
    const requestUser = Object.fromEntries(filtered) as User;

    update(requestUser)
  }, [toggle])

  return (
    <S.ModalWrapper
    animationType='fade'
      visible={visible}
      onRequestClose={onRequestClose}
      transparent={true}
      >
      <S.Container>
        <S.ModalContent>
        <S.CloseButtonWrapper>
            <S.CloseButton onPress={onRequestClose}>
              <S.CloseIcon source={require('@assets/CloseIcon.png')}/>
            </S.CloseButton>
          </S.CloseButtonWrapper>
        <S.ContentTitle>{'Altere as Informações que deseja a seguir:'}</S.ContentTitle>
        <S.AtributtesWrapper>
          {atributtes.map((atributte: string, index: number) => {
            return (
              <S.AtributteContainer key={index}>
                <S.Title>{atributte + ':'}</S.Title>
                <S.Input placeholder='' onChangeText={(value) => {
                  switch(atributte) {
                    case 'Nome': { setName(value); break; }
                    case 'Idade': { setAge(value); break; }
                    case 'Grau de Parentesco': { setParentalRole(value); break; }
                    case 'Descrição': { setDescription(value); break; }
                    case 'E-mail': { setEmail(value); break; }
                    case 'Telefone': { setPhone(value); break; }
                    case 'Senha': { setPassword(value); break }
                  }
                }} />
              </S.AtributteContainer>
            )
          })}
        </S.AtributtesWrapper>
        <Button onPress={() => {setToggle(!toggle)}} text='CONFIRMAR' size='big' style='solido' />
        </S.ModalContent>
      </S.Container>

    </S.ModalWrapper>
  )
}

export default UpdateModal;