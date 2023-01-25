import './Nav_style.css';
import {useState} from 'react';
import {MenuItem} from './Nav_menu_items.js';
import {Link} from 'react-scroll';
import {Container, Row, Navbar, NavItem} from 'react-bootstrap'
import Logo_Anim from '../Animation/Logo_Anim.json'
import Lottie from 'lottie-react';
import Hamburger from 'hamburger-react';

const Nav_menu = () => {
    const [toggle, setToggle] = useState(false);

    const show = () => {
        if(!toggle){
            setToggle(true);
        }else{
            setToggle(false);
        }
    }

    return(
        <>
        <div className='hamburger_menu' onClick={show}>
            <Hamburger className='hamburger' size={30} duration={1.0} toggled={toggle} toggle={setToggle}/>
        </div>
        <nav className='Nav_menu_items'>
            <Container>
                <Row>
                    <Navbar fixed='top' className='Navbar'>
                        <Lottie
                            animationData={Logo_Anim}
                            loop={false}
                            autoplay={true}
                            style={{
                                width: '45px',
                                height: '45px',
                                margin: '-10px 0px 0px 30px',
                            }}
                        />
                        <span className='logo'>Portfolio.</span>
                        <ul className={toggle ? "Nav_ul_mobile" : "Nav_ul"}>
                            {MenuItem.map((item, index) => {
                                return(
                                    <NavItem>
                                        <li key={index}>
                                            <Link to={item.title} className={item.Menu_name} smooth={true} offset={50} duration={300}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    </NavItem>
                                )
                            })}
                        </ul>
                    </Navbar>
                </Row>  
            </Container>
        </nav>
        </>
    )
}

export default Nav_menu;