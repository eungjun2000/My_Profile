import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({theme}) => theme.bgColor};
        color: ${({theme}) => theme.txtColor};
        transition: all 0.5s ease-in;
    }
`;

export const Dark_theme = {
    bgColor: '#282c35',
    txtColor: '#fff'
};

export const Light_theme = {
    bgColor: '#fff',
    txtColor: '#222'
};