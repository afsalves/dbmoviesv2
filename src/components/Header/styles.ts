import styled from 'styled-components/native';
import {theme} from '@global/styles/theme'


export const Container = styled.View `
    margin-top: 20px;
    flex-direction: row;
    width: 100%;
    background-color: transparent;
    align-items: center;
    justify-content: center;
`
export const Logo = styled.View `
    align-self: center;
`
export const LogoTitle = styled.Text`
    margin-left: 20px;
    font-family: ${theme.fonts.text};
    color: ${theme.colors.primary};
    font-size: 20px;
    
`