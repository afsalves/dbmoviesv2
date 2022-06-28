import styled from 'styled-components/native';
import {theme} from '@global/styles/theme'


export const Card = styled.TouchableOpacity`
    width: 350px;
    height: 450px;
    align-items: center;
    background-color:${theme.colors.secondary40}
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-right: 20px;
    padding: 20px;
    
`
export const Favorite = styled.TouchableOpacity`
    align-items: center,
    align-self: flex-end,
`

export const Banner = styled.Image`
    width: 150px;
    height: 250px;
`

export const Title = styled.Text`
    margin-top: 10px;
    font-family: ${theme.fonts.text};
    color: ${theme.colors.heading};
    font-size: 20px;
    
`

export const RateWrapper = styled.View `
    align-items: center;
    justify-content: center;
    margin-top:auto;
    flex-direction: row;
    width: 95%;
`

export const Rate = styled.Text`
    margin-left: 10px;
    font-family: ${theme.fonts.text};
    color: ${theme.colors.secondary20};
    font-size: 20px;    
`