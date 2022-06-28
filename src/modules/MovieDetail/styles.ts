import styled from 'styled-components/native';
import {theme} from '@global/styles/theme'


export const Container = styled.SafeAreaView `
    flex:1 ;
    width: 100%;
    background-color: transparent;
    justify-content: space-between;
`

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Banner = styled.Image `
  width: 200px;
  height: 300px;
  align-self: center;
`

export const MovieInfo = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.secondary90};
`

export const Name = styled.Text`
  margin-top: 20px;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.heading};
  font-size: 25px;
`
export const Title = styled.Text`
  margin-top:20px;
  font-family: ${theme.fonts.complement};
  color: ${theme.colors.heading};
  font-size: 18px;
`
export const MovieOverview = styled.View`
    height: 50%;
    background-color: ${theme.colors.secondary80};
    padding-horizontal: 20px;
    padding-top: 20px;
    padding-bottom:20px;
`
export const Overview = styled.Text`
  margin-top:20px;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.highlight};
  font-size: 16px;
`
export const FooterWrapp = styled.View`
  align-items: center;
  justify-content: space-around;
  margin-top:30px;
  width: 100%;
  flex-direction: row;
  background-color: 'white'
`
export const RateWrapper = styled.View `
    align-items: center;
    justify-content: center;
    margin-top:60px;
    flex-direction: row;
    width: 95%;
`
export const Rate = styled.Text`
    margin-left: 10px;
    font-family: ${theme.fonts.text};
    color: ${theme.colors.secondary20};
    font-size: 20px;    
`