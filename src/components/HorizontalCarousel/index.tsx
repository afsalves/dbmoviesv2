import React from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { CardMovie } from '@components/CardMovie';
import * as Styled from './styles';

type Props = {
  data:any[];
  title: string;
}

export function HorizontalCarousel ({data, title}: Props) {

  const baseUrl = 'https://image.tmdb.org/t/p/original'

  return (
    <>
      <Styled.CategorieWrapper>
        <Styled.Title>{title}</Styled.Title>
      </Styled.CategorieWrapper>
      <SwiperFlatList 
        horizontal
        style={{ marginTop:20 }}
        showsHorizontalScrollIndicator={false}
        autoplay
        autoplayDelay={3}
        autoplayLoop
        data={data}
        keyExtractor={item => item.id} 
        renderItem={({ item }) => {
          const name = item.original_title
          const rate = item.vote_average
          const id = item.id
          const img = baseUrl.concat(item.poster_path)
          return (
            <CardMovie id={id} name={name}rate={rate} image={img}/>
          )
      }}
      />
    </>
  );
};
