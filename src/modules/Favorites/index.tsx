import React from 'react';
import { Background } from '@components/Background';
import {Header} from '@components/Header/Index';
import * as Styled from './styles';



const Favorites: React.FC = () => {


  return (
      <Background>
        <Styled.Container>
            <Header />
            <Styled.Wrapper showsVerticalScrollIndicator={false}>
            </Styled.Wrapper>
        </Styled.Container>
      </Background>
  );
};

export default Favorites;