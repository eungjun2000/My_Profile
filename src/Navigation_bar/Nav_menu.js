import {MenuItem} from './Nav_menu_items.js';
import {Link} from 'react-scroll';
import './Nav_style.css';
import {Col, Container, Row, Navbar, NavItem} from 'react-bootstrap'

const Nav_menu = () => {
    return(
        <nav className='Nav_menu_items'>
            <Container>
                <Row>
                    <Navbar fixed='top' style={{background:'#FF7576', zIndex: '50'}}>
                        <ul className='Nav_ul'>
                            {MenuItem.map((item, index) => {
                                return(
                                    <NavItem>
                                        <li key={index}>
                                            <Link to={item.title} className={item.Menu_name} smooth={true} offset={-380} duration={500}>
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
    )
}

export default Nav_menu;