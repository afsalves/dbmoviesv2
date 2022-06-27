import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import useDBMovies from '@hooks/useDBMovies';
import { Background } from '@components/Background';
import {Header} from '@components/Header/Index';
import {HorizontalCarousel} from '@components/HorizontalCarousel';
import {theme} from '@global/styles/theme'
import * as Styled from './styles';



const Home: React.FC = () => {
  const { getLastestMovies, getPopularMovies, getTopRatedMovies } = useDBMovies();
  const [lastestList, setLastestList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function bootstrap() {
      try {
        setLoading(true);
        const lastest = await getLastestMovies();
        setLastestList(lastest.results);
        const popular = await getPopularMovies();
        setPopularList(popular.results);
        const topRate = await getTopRatedMovies();
        setTopRatedList(topRate.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    bootstrap();
  }, [getLastestMovies]);

  return (
      <Background>
        <Styled.Container>
            <Header />
            <Styled.Wrapper showsVerticalScrollIndicator={false}>
              {loading? (
                <ActivityIndicator color={theme.colors.primary} />
              ) : (
               <>
                  <HorizontalCarousel title = {'Lastest Movies'} data={lastestList}/>
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