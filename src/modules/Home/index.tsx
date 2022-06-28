import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import { Background } from '@components/Background';
import {Header} from '@components/Header/Index';
import {HorizontalCarousel} from '@components/HorizontalCarousel';
import {theme} from '@global/styles/theme'
import useDBMovies from '@hooks/useDBMovies';
import * as Styled from './styles';



const Home: React.FC = () => {
  const {getPopularMovies, getTopRatedMovies } = useDBMovies();
  const [popularList, setPopularList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function popular() {
      try {
        setLoading(true);
        const popular = await getPopularMovies();
        setPopularList(popular.results);
        console.log('popular', popularList)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    popular();
  }, [getPopularMovies]);

  useEffect(() => {
    async function topRate() {
      try {
        setLoading(true);
        const topRated = await getTopRatedMovies();
        setTopRatedList(topRated.results);
      } catch (err) {
        console.error(err);
        console.log('rated', topRatedList)
      } finally {
        setLoading(false);
      }
    }
    topRate();
  }, [getTopRatedMovies]);

  return (
      <Background>
        <Styled.Container>
            <Header />
            <Styled.Wrapper showsVerticalScrollIndicator={false}>
              {loading? (
                <ActivityIndicator color={theme.colors.primary} />
              ) : (
               <>
                  <HorizontalCarousel title = {'Most Popular'} data={popularList}/>
                  <HorizontalCarousel title = {'Top Rated'} data={topRatedList}/>
               </> 
              )}
            </Styled.Wrapper>
        </Styled.Container>
      </Background>
  );
};

export default Home;