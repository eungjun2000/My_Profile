import './App.css'
import Fonts from './Font.js'
import {ThemeProvider} from 'styled-components';
import {useDarkMode} from './Dark_mode/useDarkMode';
import {GlobalStyles, Dark_theme, Light_theme} from './Theme';
import Toggle from './Dark_mode/Dark_mode_toggle'
import Nav_menu from './Navigation_bar/Nav_menu';
import GotoTop from './GotoTop';
import Home from './Sections/Home'
import About from './Sections/About';
import Skills from './Sections/Skills';
import Works from './Sections/Works';
import Contact from './Sections/Contact';

function App(){
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'Light' ? Light_theme : Dark_theme;

  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
     
        <Nav_menu/>

        <Fonts/>

        <Home/>
        <About/>
        <Skills/>
        <Works/>
        <Contact/>
        <GotoTop/>

      </ThemeProvider>
    </div>
  );
}

export default App;