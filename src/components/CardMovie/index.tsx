import React from 'react';
import {TouchableOpacityProps} from 'react-native'
import * as Styled from './styles';
import Star from '@assets/icons/star.svg'
import { useNavigation } from '@react-navigation/core';

type Props = TouchableOpacityProps & {
  id: number;
  name: string;
  rate: number;
}

export function CardMovie({
  id,
  name,
  rate,
}: Props){

  const nav = useNavigation();

  return(
      <Styled.Card onPress={() => {
        nav.navigate('MovieDetail',{
          screen: 'MovieDetail',
          params: {id:id}
        } )
      }}>
        <Styled.Title numberOfLines={3} >{name}</Styled.Title>
        <Styled.RateWrapper>
          <Star width={30} height={30} />
        <Styled.Rate>{`Rate ${rate}`}</Styled.Rate>
        </Styled.RateWrapper>
      </Styled.Card>
  );
}