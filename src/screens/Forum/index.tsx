import * as S from './styles';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Cards_Forum from '@components/Cards_Forum';
import UserService from '@services/UserService';
import { Keyboard, ScrollView } from 'react-native';

interface IForumPost {
  id?: string;
  title: string;
  subtitle: string;
  commentCount?: number;
}

const Forum = () => {
  
  const [searchtext, setSearchtext] = useState("");
  const [data, setData] = useState<IForumPost[]>([]);

  const loadForum = async () => {
    Keyboard.dismiss();
    try {
      const response = await UserService.listForum();
      setData(response || []);
    } catch (e) {
      console.log('Erro ao carregar fórum:', e);
    }
  };

  useEffect(() => {
    loadForum();
  }, []);

  const filteredData = data.filter((post) =>
    post.title?.toLowerCase().includes(searchtext.toLowerCase()) ||
    post.subtitle?.toLowerCase().includes(searchtext.toLowerCase())
  );

  return(
  <S.Wrapper>
    <StatusBar style="dark" />
    <S.Container>
      <S.Search_Wrapper>
        <S.Search><S.Search_Icon source={require('../../../public/assets/SearchIcon.png')}/></S.Search>
        <S.Search_Input 
        placeholder='O que você quer descobrir?' 
        placeholderTextColor="#FFB381" 
        value={searchtext}
        onChangeText={(value) => setSearchtext(value)}
        />
      </S.Search_Wrapper>
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ gap: 16, paddingBottom: 16 }} showsVerticalScrollIndicator={false}>
        {filteredData.map((post, index) => (
          <Cards_Forum key={post.id || index} title={post.title} subtitle={post.subtitle} commentCount={post.commentCount} />
        ))}
      </ScrollView>
    </S.Container>
  </S.Wrapper>
)
};

export default Forum;
