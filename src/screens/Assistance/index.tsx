import React, {useRef} from 'react';
import {Animated, Dimensions} from 'react-native';
import * as S from './styles';
import SlideItem from '@components/SlideItem';
import slides from '@utils/SlideData';
import Pagination from '@components/Pagination';
import Button from '@components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Assistance = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [scrolledUnits, setScrolledUnits] = React.useState(0);
  
  const { width, height } = Dimensions.get('screen');

  const handleScroll = (event: any) => {
    Animated.event([
      {
        nativeEvent: {
          contentOffset: {
            x: scrollX,
          },
        },
      },
    ], {
      useNativeDriver: false,
    })(event);
    setScrolledUnits(event.nativeEvent.contentOffset.x);
  };

  const handleScrollEnd = async() => {
    await AsyncStorage.setItem('@app:isFirstAccess', 'false');
    navigation.navigate('main');
  }

  return (
    <S.Container>
      <S.Background source={require('@assets/assistanceBackground.png')}>
        <S.TurtleIcon source={require('@assets/JabutiNelson_Esq.png')}/>
        <S.SlidesContainer>
          <S.Slides 
            data={slides}
            height={height}
            renderItem={({item}) => <SlideItem title={item.title} icon={item.icon} content={item.content} width={width} />}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            />
        </S.SlidesContainer>
        <Pagination slides={slides} scrollX={scrolledUnits} width={width}/>
        {scrolledUnits > width*(slides.length - 1) && <Button text="COMEÇAR" size='medium' style='solido' onPress={handleScrollEnd}/>}
      </S.Background>
    </S.Container>
  );
}

export default Assistance;