import {MenuItem} from './Nav_menu_items.js';
import DarkMode from './Dark_mode_menu.js';
import {Link} from 'react-scroll';
import './Nav_style.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.9/lottie.min.js';

const Nav_menu = () => {
    return(
        <nav className='Nav_menu_items'>
            <ul className='Nav_ul'>
                {MenuItem.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link to={item.title} className={item.Menu_name} smooth={true} offset={-380} duration={500}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>

            <DarkMode/>

            <style>@import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');</style>          
        </nav>
    )
}

export default Nav_menu;