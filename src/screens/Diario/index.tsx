/* eslint-disable @typescript-eslint/no-require-imports */
import * as S from './styles';
import React, { useEffect, useState, useCallback } from 'react';
import UserService, { IEntryPatchRequest } from '@services/UserService';
import { AppError } from '@utils/AppError';
import CalendarModal from '@components/CalendarModal';
import { ScrollView } from 'react-native';

const Diario = () => {

  const [date, setDate] = useState(new Date());

  // Dados da entry atual
  const [entryTitle, setEntryTitle] = useState('');
  const [entryContent, setEntryContent] = useState('');
  const [id, setId] = useState('');

  // Dados novos
  const [newEntryTitle, setNewEntryTitle] = useState('');
  const [newEntryContent, setNewEntryContent] = useState('');

  // modo: reading | writing | editing
  const [mode, setMode] = useState<'reading' | 'writing' | 'editing'>('reading');

  // modal
  const [visible, setVisibility] = useState(false);

  // trigger refetch
  const [refresh, setRefresh] = useState(false);

  const formatDisplayDate = (d: Date) =>
    `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

  const formatRequestDate = (d: Date) =>
    `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

  const refreshEntry = () => setRefresh(prev => !prev);

  const getCurrentEntry = useCallback(async () => {
    const requestDate = formatRequestDate(date);

    try {
      const response = await UserService.getDateEntry(requestDate);

      if (!response || response.length === 0) {
        setEntryTitle('');
        setEntryContent('');
        setId('');
        setMode('writing');
      } else {
        setEntryTitle(response[0].title);
        setEntryContent(response[0].content);
        setId(response[0].id);
        setMode('reading');
      }

      // limpa campos de edição
      setNewEntryTitle('');
      setNewEntryContent('');

    } catch (error) {
      throw new AppError(error.message);
    }
  }, [date]);

  const handleSave = async () => {
    if (!newEntryContent.trim()) return;

    try {
      await UserService.postEntry({
        date: formatRequestDate(date),
        title: newEntryTitle,
        content: newEntryContent,
      });

      refreshEntry();
      setMode('reading');

    } catch (error) {
      throw new AppError(error);
    }
  };

  const handleUpdate = async () => {
    const updateRequest: IEntryPatchRequest = {
      title: newEntryTitle || entryTitle,
      content: newEntryContent || entryContent,
    };

    try {
      await UserService.updateEntry(updateRequest, id);
      refreshEntry();
      setMode('reading');
    } catch (error) {
      throw new AppError(error);
    }
  };

  const handleDelete = async () => {
    if (!id) return;

    try {
      await UserService.deleteEntry(id);
      refreshEntry();
      setMode('writing');

    } catch (error) {
      throw new AppError(error);
    }
  };

  useEffect(() => {
    getCurrentEntry();
  }, [getCurrentEntry, refresh]);

  return (
    <S.Wrapper>
      <S.DescriptionText>
        Aqui você pode registrar suas entradas diárias. Selecione uma data pelo ícone de calendário,
        escreva ou edite o conteúdo e salve para registrar suas notas.
      </S.DescriptionText>

      <S.Header>
        <S.CurrentDate>{formatDisplayDate(date)}</S.CurrentDate>

        <CalendarModal
          visible={visible}
          setVisibility={setVisibility}
          date={date}
          setDate={setDate}
        />

        <S.ButtonsContainer>
          <S.DeleteButton
            onPress={handleDelete}
          >
            <S.DeleteIcon source={require('@assets/trashCan.png')} />
          </S.DeleteButton>

          <S.EditButton
            onPress={() => {
              if (!id) return;

              if (mode === 'editing') {
                handleUpdate();
              } else {
                setNewEntryTitle(entryTitle);
                setNewEntryContent(entryContent);
                setMode('editing');
              }
            }}
          >
            <S.EditIcon
              mode={mode}
              source={
                mode === 'editing'
                  ? require('@assets/check.png')
                  : require('@assets/edit.png')
              }
            />
          </S.EditButton>

          <S.CalendarButton onPress={() => setVisibility(true)}>
            <S.CalendarIcon source={require('@assets/carbon_calendar.png')} />
          </S.CalendarButton>
        </S.ButtonsContainer>
      </S.Header>

      <S.Body>
        {mode === 'reading' ? (
          <ScrollView
            style={{ width: '100%' }}
            contentContainerStyle={{ paddingBottom: 16 }}
            showsVerticalScrollIndicator={true}
          >
            <S.EntryTitle>{entryTitle}</S.EntryTitle>
            <S.EntryContent>{entryContent}</S.EntryContent>
          </ScrollView>
        ) : (
          <>
            <S.EntryTitleInput
              multiline
              placeholder="Título"
              value={newEntryTitle}
              onChangeText={setNewEntryTitle}
            />

            <S.EntryContentInput
              placeholder="Conteúdo"
              multiline
              scrollEnabled={true}
              value={newEntryContent}
              onChangeText={setNewEntryContent}
              textAlignVertical="top"
              onEndEditing={() => {
                if (mode === 'editing') handleUpdate();
                if (mode === 'writing') handleSave();
              }}
            />
          </>
        )}
      </S.Body>


    </S.Wrapper>
  );
};

export default Diario;
