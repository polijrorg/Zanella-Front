import React from 'react';
import * as S from './styles';
import Button from '../Button';

interface ModalProps {
  visible: boolean;
  onRequestClose(): void;
  onConfirm(): void;
}

const Modal : React.FC = ({ visible, onRequestClose, onConfirm }: ModalProps) => {
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
          <S.textContent>{'Você tem certeza de que deseja sair?'}</S.textContent>
          <S.ButtonsWrapper>
            <Button text={'Sim'} style='solido' onPress={onConfirm} size='small' />
            <Button text={'Não'} style='sutil' onPress={onRequestClose} size='small' />
          </S.ButtonsWrapper>
        </S.ModalContent>
      </S.Container>
    </S.ModalWrapper>
  );
}

export default Modal;