import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Button from '@components/Button';
import useAuth from '@hooks/useAuth';
import { IUpdateRequest } from '@services/UserService';

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
  const { update } = useAuth();

  const atributtes = [
    "Nome",
    "Idade",
    "Grau de Parentesco",
    "Descrição",
    "E-mail",
    "Telefone",
    "Senha",
  ]
  
  const user: IUpdateRequest = {
    name, 
    age, 
    parental_role: parentalRole,
    description,
    email,
    phone, 
    password,
  }

  const updateUser = () => {
    const asArray = Object.entries(user);
    const filtered = asArray.filter(([key, value]) => value != '');
  
    if (filtered.length === 0) {
      alert('Preencha ao menos um campo');
      return;
    };

    const requestUser = Object.fromEntries(filtered) as IUpdateRequest;

    update(requestUser)
    
    setName('');
    setAge('');
    setParentalRole('');
    setDescription('');
    setEmail('');
    setPhone('');
    setPassword('');

    onRequestClose();
  }

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
        <Button onPress={() => updateUser()} text='CONFIRMAR' size='big' style='solido' />
        </S.ModalContent>
      </S.Container>

    </S.ModalWrapper>
  )
}

export default UpdateModal;