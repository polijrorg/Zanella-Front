import * as S from './styles';
import React, { useEffect, useState } from 'react';
import UserService, { IEntryRequest } from '@services/UserService';
import { AppError } from '@utils/AppError';
import CalendarModal from '@components/CalendarModal';

const Diario = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const initialDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  const [TitleDate, setTitleDate] = useState(initialDate);

  // to get entry
  const [entryTitle, setEntryTitle] = useState('');
  const [entryContent, setEntryContent] = useState('');

  // to post entry
  const [newEntryTitle, setNewEntryTitle] = useState('');
  const [newEntryContent, setNewEntryContent] = useState('');

  const [mode, setMode] = useState('reading');

  const [visible, setVisibility] = useState(false);

  const getCurrentEntry =  async (selectedDate: Date) => {
    const formattedDate = (selectedDate.getDate()) + "/" + (selectedDate.getMonth() + 1) + "/" + selectedDate.getFullYear();
    console.log(formattedDate);
    setTitleDate(formattedDate);
    
    const requestDate = selectedDate.getFullYear() + "-" + (selectedDate.getMonth() + 1) + "-" + (selectedDate.getDate());
    try {
      const response = await UserService.getDateEntry(requestDate);
  
      if(response.length == 0){
        setMode('writing')
      } else {
        setEntryTitle(response[0].title);
        setEntryContent(response[0].content);
        setMode('reading')
      }


    } catch (error) {
      throw new AppError(error.message);
    }
  }

  const handleSave = async () => {
    try {
      const response = await UserService.postEntry({
        date: JSON.stringify(new Date()),
        title: newEntryTitle,
        content: newEntryContent,
      });

      console.log(response)
    } catch (error) {
      throw new AppError(error); 
    }
  }

  useEffect(() => {
    getCurrentEntry(date);
  }, [date])

  return (
    <S.Wrapper>
      <S.Header>
        <S.CurrentDate>{`${TitleDate}`}</S.CurrentDate>
        <CalendarModal visible={visible} setVisibility={setVisibility} setDate={setDate}/>
        <S.CalendarButton onPress={() => setVisibility(true)}>
          {mode === 'reading' ? (
            <S.CalendarIcon source={require('@assets/carbon_calendar.png')}/>
            ) : (
              <S.CreateButton onPress={() => {handleSave; setVisibility(true)}}>
                <S.ButtonIcon source={require('@assets/check.png')}/>
              </S.CreateButton>
          )}
        </S.CalendarButton>
      </S.Header>
      <S.Body>
        {mode === 'reading' ? (
          <>
            <S.EntryTitle>{`${entryTitle}`}</S.EntryTitle>
            <S.EntryContent>{`${entryContent}`}</S.EntryContent>
          </>
        ) : (
          <>
            <S.EntryTitleInput multiline={true} placeholder="Título" onChangeText={(text) => setNewEntryTitle(text)} />
            <S.EntryContentInput multiline={true} placeholder="Conteúdo" onChangeText={(text) => setNewEntryContent(text)} />
          </>
        )}
      </S.Body>
    </S.Wrapper>
  )
};

export default Diario;
