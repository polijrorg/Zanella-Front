import * as S from './styles';
import React, { useEffect, useState } from 'react';
import UserService, {IEntryPatchRequest} from '@services/UserService';
import { AppError } from '@utils/AppError';
import CalendarModal from '@components/CalendarModal';

const Diario = ({navigation}) => { 
  const [date, setDate] = useState(new Date());
  const initialDate = (date.getDate()) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  const [TitleDate, setTitleDate] = useState(initialDate);

  // to get entry
  const [entryTitle, setEntryTitle] = useState('');
  const [entryContent, setEntryContent] = useState('');
  const [id, setId] = useState(''); 

  // to post entry
  const [newEntryTitle, setNewEntryTitle] = useState('');
  const [newEntryContent, setNewEntryContent] = useState('');

  // to update entry 
  const [toggleUpdate, setToggleUpdate] = useState(false);

  const [mode, setMode] = useState('reading');

  const [visible, setVisibility] = useState(false);

  const getCurrentEntry =  async () => { 
    const formattedDate = (date.getDate()) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    setTitleDate(formattedDate);
    
    const requestDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate());
    
    try {
      const response = await UserService.getDateEntry(requestDate);
  
      if(response.length == 0){
        setMode('writing')
        setEntryTitle(null);
        setEntryContent(null);
      } else {
        setEntryTitle(response[0].title);
        setEntryContent(response[0].content);
        setId(response[0].id);
        setMode('reading')
      }


    } catch (error) {
      throw new AppError(error.message);
    }
  }

  const handleSave = async () => {
    if (newEntryContent.length == 0) {
      return
    }
    try {
      await UserService.postEntry({
        date: (date.getFullYear()) + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
        title: newEntryTitle,
        content: newEntryContent,
      });

      setToggleUpdate(!toggleUpdate);
      setMode('reading');
    } catch (error) {
      throw new AppError(error); 
    }
  }

  const handleUpdate = async () => {
    const updateRequest: IEntryPatchRequest = {
      title: newEntryTitle ? newEntryTitle : entryTitle,
      content: newEntryContent ? newEntryContent : entryContent,
    }

    try {
      await UserService.updateEntry(updateRequest, id);
    } catch (error) {
      throw new AppError(error); 
    }
  }

  const handleDelete = async () => {
    try {
      await UserService.deleteEntry(id);
      setToggleUpdate(!toggleUpdate)
    } catch (error) {
      throw new AppError(error); 
    }
  }

  useEffect(() => {
    getCurrentEntry();
  }, [date, toggleUpdate])

  return (
    <S.Wrapper>
      <S.Header>
        <S.CurrentDate>{`${TitleDate}`}</S.CurrentDate>
        <CalendarModal visible={visible} setVisibility={setVisibility} setDate={setDate} date={date}/>
        <S.ButtonsContainer>
          <S.DeleteButton onPress={() => {
            handleDelete();
            setMode('reading');
            setToggleUpdate(!toggleUpdate);
          }}>
            <S.DeleteIcon source={require('@assets/trashCan.png')}/>
          </S.DeleteButton>
          <S.EditButton onPress={() => {
            if (mode === 'editing') {
              setMode('reading');
              setToggleUpdate(!toggleUpdate);
            } else {
              setMode('editing');
            }
          }}>
            <S.EditIcon mode={mode} source={mode === 'editing' ? require('@assets/check.png') : require('@assets/edit.png')}/>
          </S.EditButton>
          <S.CalendarButton onPress={() => setVisibility(true)}>
            <S.CalendarIcon source={require('@assets/carbon_calendar.png')}/>
          </S.CalendarButton>
        </S.ButtonsContainer>
      </S.Header>
      <S.Body>
        {mode === 'reading' ? (
          <>
            <S.EntryTitle>{`${entryTitle}`}</S.EntryTitle>
            <S.EntryContent>{`${entryContent}`}</S.EntryContent>
          </>
        ) : (
          <>
            <S.EntryTitleInput 
              multiline={true} 
              placeholder={"Título"} 
              defaultValue={entryTitle} 
              onChangeText={(text) => setNewEntryTitle(text)} 
            />
            <S.EntryContentInput 
              multiline={false} 
              placeholder={"Conteúdo"} 
              defaultValue={entryContent} 
              onChangeText={(text) => setNewEntryContent(text)} 
              onEndEditing={() => {
                mode === 'editing' 
                  ? handleUpdate() 
                  : mode === 'writing' 
                    ? handleSave()
                    : null
              }}
            />
          </>
        )}
      </S.Body>
    </S.Wrapper>
  )
};

export default Diario;
