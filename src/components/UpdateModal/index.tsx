/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useState } from 'react';
import * as S from './styles';
import Button from '@components/Button';
import useAuth from '@hooks/useAuth';
import { IUpdateRequest } from '@services/UserService';

interface ModalProps {
  visible: boolean;
  onRequestClose(): void;
}

const fieldLabels: Partial<Record<keyof IUpdateRequest, string>> = {
  name: 'Nome',
  age: 'Idade',
  parental_role: 'Grau de Parentesco',
  description: 'Descrição',
  email: 'E-mail',
  phone: 'Telefone',
};

const UpdateModal: React.FC<ModalProps> = ({ visible, onRequestClose }) => {
  const { user, update } = useAuth();

  const [formData, setFormData] = useState<IUpdateRequest>({
    name: user.name || '',
    age: user.age || '',
    parental_role: user.parental_role || '',
    description: user.description || '',
    email: user.email || '',
    phone: user.phone || '',
    password: '',
  });

  const handleChange = (key: keyof IUpdateRequest, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const updateUser = () => {
    const filteredEntries = Object.entries(formData).filter(
      ([, value]) => typeof value === 'string' && value.trim() !== ''
    );
    if (filteredEntries.length === 0) {
      alert('Preencha ao menos um campo');
      return;
    }

    const updatedUser = Object.fromEntries(filteredEntries) as IUpdateRequest;
    update(updatedUser);
    setFormData({
      name: '',
      age: '',
      parental_role: '',
      description: '',
      email: '',
      phone: '',
      password: '',
    });
    onRequestClose();
  };

  return (
    <S.ModalWrapper animationType="fade" visible={visible} onRequestClose={onRequestClose} transparent>
      <S.Container>
        <S.ModalContent>
          <S.CloseButtonWrapper>
            <S.CloseButton onPress={onRequestClose}>
              <S.CloseIcon source={require('@assets/CloseIcon.png')} />
            </S.CloseButton>
          </S.CloseButtonWrapper>

          <S.ContentTitle>Altere as informações que deseja a seguir:</S.ContentTitle>

          <S.AtributtesWrapper>
            {Object.entries(fieldLabels).map(([key, label]) => (
              <S.AtributteContainer key={key}>
                <S.Title>{label}:</S.Title>

                {key === 'parental_role' ? (
                  <S.Wrapper_Parental>
                    <S.OptionButton
                      selected={formData.parental_role === 'pai'}
                      onPress={() => handleChange('parental_role', 'pai')}
                    >
                      <S.OptionText selected={formData.parental_role === 'pai'}>
                        Pai
                      </S.OptionText>
                    </S.OptionButton>

                    <S.OptionButton
                      selected={formData.parental_role === 'mãe'}
                      onPress={() => handleChange('parental_role', 'mãe')}
                    >
                      <S.OptionText selected={formData.parental_role === 'mãe'}>
                        Mãe
                      </S.OptionText>
                    </S.OptionButton>
                  </S.Wrapper_Parental>
                ) : (
                  <S.Input
                    value={formData[key as keyof IUpdateRequest] as string}
                    placeholder=""
                    secureTextEntry={key === 'password'}
                    keyboardType={
                      key === 'age' || key === 'phone' ? 'numeric' : 'default'
                    }
                    onChangeText={(value) =>
                      handleChange(key as keyof IUpdateRequest, value)
                    }
                  />
                )}
              </S.AtributteContainer>
            ))}
          </S.AtributtesWrapper>

          <Button onPress={updateUser} text="CONFIRMAR" size="big" style="solido" />
        </S.ModalContent>
      </S.Container>
    </S.ModalWrapper>
  );
};

export default UpdateModal;
