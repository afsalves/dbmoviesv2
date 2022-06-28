import React from 'react';
import {TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Background } from '@components/Background';
import Back from '@assets/icons/back.svg';
import Star from '@assets/icons/star.svg'
import useDBMovies from '@hooks/useDBMovies';
import * as Styled from './styles';


const MovieDetails: React.FC = () => {
  const { params: routeParams } = useRoute() as any;
  const { params } = routeParams;
  
  const nav = useNavigation();


  return (
    <Background>
      <Styled.Container>
        <TouchableOpacity onPress={() => {nav.goBack()}}>
          <Back height={30} width={30}/>
        </TouchableOpacity>
        <Styled.Banner source={{uri: params.image}}/>
        <Styled.MovieInfo>
          <Styled.Name numberOfLines={2}>{params.name}</Styled.Name>
          <Styled.Title numberOfLines={2}>{params.orinalName}</Styled.Title>
        </Styled.MovieInfo>
       <Styled.MovieOverview>
         <Styled.Overview numberOfLines={8}>{params.overview}</Styled.Overview>
        <Styled.FooterWrapp>
        <Styled.RateWrapper>
          <Star width={30} height={30} />
        <Styled.Rate>{`Rate ${params.rate}`}</Styled.Rate>
        </Styled.RateWrapper>
       </Styled.FooterWrapp>
       </Styled.MovieOverview>
      </Styled.Container>
    </Background>
  );
};

export default MovieDetails;