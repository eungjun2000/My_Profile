import './App.css'
import Typical from 'react-typical';
import {MenuItem} from './Navigation_bar/Nav_menu_items.js';
import Nav_menu from './Navigation_bar/Nav_menu';
import GotoTop from './GotoTop';

function App() {
  return (
    <div>
      <Nav_menu/>
      
      <span className='Show_Intro'>
        I'm a{' '}
        <Typical
          loop={Infinity}
          wrapper='span'
          steps={[
            'web...', 3000,
            'developer.', 3000,
            'front end developer.', 3000
          ]}
        />
      </span>

      <main>
        {MenuItem.map((item, index) => {
          return(
            <div className='content'>
              <h3 id={item.title} key={index}>
                {item.title}
              </h3>
            </div>
          )
        })}
      </main>

      <GotoTop/>

      <style>@import url('https://fonts.googleapis.com/css2?family=Basic&display=swap');</style>
    </div>
  );
}

export default App;