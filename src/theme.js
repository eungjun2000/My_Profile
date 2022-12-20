const swithThemeToggle = document.querySelector(".Light_Dark_convert");
const html = document.querySelector('html');
let isDarkMode = false;

function toggleTheme(){
    isDarkMode = !isDarkMode;
    swithTheme();
}

function swithTheme(){
    if(isDarkMode){
        html.classList.add('dark');
    }else{
        html.classList.remove('dark');
    }
}

/*
const Light_theme = {
    bgColor: '#fff',
    txtColor: '#222'
};

const Dark_theme = {
    bgColor: '282c35',
    txtColor: '#fff'
}

const theme = {
    Light_theme,
    Dark_theme
}

export default theme;
*/