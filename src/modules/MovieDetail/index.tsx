import React, {useEffect, useState} from 'react';
import {TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Background } from '@components/Background';
import Back from '@assets/icons/back.svg';
import Movie from '@assets/icons/movie.svg';
import useDBMovies from '@hooks/useDBMovies';
import {generes} from '@utils/generes'
import * as Styled from './styles';


const MovieDetails: React.FC = () => {

  const { getMovieDetails } = useDBMovies();
  const { params: routeParams } = useRoute() as any;
  const { params } = routeParams;
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});

  const id = params.id;
  const nav = useNavigation();


  useEffect(() => {
    async function bootstrap() {
      try {
        setLoading(true);
        const data = await getMovieDetails(id);
        setDetails(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    bootstrap();
  }, [getMovieDetails]);

  return (
    <Background>
      <Styled.Container>
        <TouchableOpacity onPress={() => {nav.goBack()}}>
          <Back height={30} width={30}/>
        </TouchableOpacity>
        <Movie height={150} width={150} style={{alignSelf: 'center'}}/>
        <Styled.MovieInfo>
          <Styled.Name numberOfLines={2}>Fantastic Beasts Collection</Styled.Name>
          <Styled.Title numberOfLines={2}>Fantastic Beasts: The Secrets of Dumbledore</Styled.Title>
        </Styled.MovieInfo>
       <Styled.MovieOverview>
         <Styled.Overview numberOfLines={8}>{`"Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers."`}</Styled.Overview>
        <Styled.GeneresWrapp>
          {
            generes.map(genere =>(
              <Styled.GeneresTags>
                <Styled.GeneresText>{genere.title}</Styled.GeneresText>
              </Styled.GeneresTags>
            ))
          }
       </Styled.GeneresWrapp>
       </Styled.MovieOverview>
      </Styled.Container>
    </Background>
  );
};

export default MovieDetails;