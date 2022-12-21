import {useState} from 'react';

export const useDarkMode = (props) => {
    const [theme, setTheme] = useState('Dark');
    
    const toggleTheme = () => {
        if(theme === 'Dark'){
            setTheme('Light');
        }else{
            setTheme('Dark');
        }
    }

    return [theme, toggleTheme];
}