import React, {useState} from 'react';
import {TouchableOpacityProps, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import Star from '@assets/icons/star.svg'
import Heart from '@assets/icons/heart.svg'
import Empty from '@assets/icons/emptyHeart.svg'
import useAsyncStorage from '@hooks/useAsyncStorage'
import * as Styled from './styles';


type Props = TouchableOpacityProps & {  
  id: number;
  name: string;
  rate: number;
  image: string;
  overview: string;
  originalName: string;
}

export function CardMovie({
  id,
  name,
  rate,
  image,
  overview,
  originalName,
}: Props){

  const [isFavorite, setIsFavorite] = useState(false)
  const {setItem, removeItem} = useAsyncStorage()
  const nav = useNavigation();

  const key = id.toString()
  async function handleFavorites() {
    const data = [name, rate, image, overview]
    try{ 
      await setItem(key, data)
      Alert.alert("Filme salvo nos seus favoritos!");
    }catch{
      Alert.alert("Não foi possível salvar. 😢");
    }
  }

  async function handleRemovefavorites() {
    try {
      await removeItem(key)
      Alert.alert("Filme removido dos seus favoritos!");
    }catch{
      return
    }
  }

  const toggleSwitchFavorite = () => {
    if (isFavorite){
      handleRemovefavorites()
    }else{
      handleFavorites()
    }
    setIsFavorite(previousState => !previousState);
  }

  return(
      <Styled.Card onPress={() => {
        nav.navigate('MovieDetail',{
          screen: 'MovieDetail',
          params: {id:id, name:name, image:image, overview:overview, originalName:originalName, rate:rate}
        } )
      }}>
        <Styled.Favorite 
          onPress={toggleSwitchFavorite} 
          hitSlop={{ top: 50, right: 50, bottom: 50, left: 50 }}>
          {isFavorite ? (
            <Heart width={25} height={25}/>
            ):(
            <Empty width={25} height={25}/>
          )}
        </Styled.Favorite>
        <Styled.Banner source={{uri: image}}/>
        <Styled.Title numberOfLines={2}>{name}</Styled.Title>
        <Styled.RateWrapper>
          <Star width={30} height={30} />
        <Styled.Rate>{`Rate ${rate}`}</Styled.Rate>
        </Styled.RateWrapper>
      </Styled.Card>
  );
}