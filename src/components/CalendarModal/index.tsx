import * as S from './styles';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { theme } from '@styles/default.theme';
import { useEffect, useState } from 'react';

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
};

LocaleConfig.defaultLocale = 'br';


interface ICalendarModalProps {
  visible: boolean;
  setVisibility: (visible: boolean) => void;
  setDate: (date: Date)=> void;
  date: Date;
}

const ModalCalendar:React.FC<ICalendarModalProps> = ({
  visible,
  setVisibility,
  setDate,
  date,
}) => {
  const initialDate = `${new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate())}`;
  const [selectedDate, setSelectedDate] = useState<string>(initialDate);

  const handleDayPress = (date: string) => {
    const dateString = date.split('-');
    const dateTime = new Date(parseInt(dateString[0]), parseInt(dateString[1]) - 1, parseInt(dateString[2]));
    setDate(dateTime);
  }
  
  return (
    <S.ModalWrapper visible={visible} transparent> 
      <S.ModalContainer>
        <S.CalendarContainer>
          <S.CloseIconWrapper>
            <S.CloseIconButton onPress={() => setVisibility(false)}>
              <S.CloseIcon source={require('@assets/CloseIcon.png')}/>
            </S.CloseIconButton>
          </S.CloseIconWrapper>
          <Calendar 
            onDayPress={(day) => {
              handleDayPress(day.dateString)
              setSelectedDate(day.dateString)
            }}
            setState={{
              selectedDate,
            }}
            style={{
              width: 321,
              paddingRight: 4,
              paddingLeft: 4,
            }}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: `${theme.colors.primary.BordaElemento}`,
              },
            }}
            theme={{
              backgroundColor: `${theme.colors.primary.BgSutil}`,
              calendarBackground: `${theme.colors.primary.BgSutil}`,
              textSectionTitleColor: `${theme.colors.primary.TextoHigh}`,
              selectedDayTextColor: `${theme.colors.primary.BgSutil}`,
              selectedDayBackgroundColor: `${theme.colors.primary.Grass.clara}`,
              dayTextColor: `${theme.colors.primary.TextoHigh}`,
              todayTextColor: `${theme.colors.primary.BgTela}`,
              arrowColor: `${theme.colors.primary.Grass.clara}`,
              monthTextColor: `${theme.colors.primary.TextoHigh}`,
              textMonthFontWeight: '400',
              textDayFontWeight: '400',  
              textDayHeaderFontSize: 10,
              todayBackgroundColor: `${theme.colors.primary.Grass.clara}`,
              weekVerticalMargin: 0,
            }}
          />
        </S.CalendarContainer>
      </S.ModalContainer>
    </S.ModalWrapper>
  )
}

export default ModalCalendar;