import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body, nav{
        background: ${({theme}) => theme.bgColor};
        color: ${({theme}) => theme.txtColor};
        transition: all 0.5s ease-in;
    }
    .skill_row, .profile_card{
        background: ${({theme}) => theme.navHeader};
        color: ${({theme}) => theme.txtColor};
        transition: all 0.5s ease-in;
    }
`;

export const Dark_theme = {
    navHeader: '#1e243d',
    bgColor: '#282c35',
    txtColor: '#fff',
};

export const Light_theme = {
    navHeader: '#d2d4ed',
    bgColor: '#fff',
    txtColor: '#222'
};