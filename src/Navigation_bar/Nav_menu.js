import {MenuItem} from './Nav_menu_items.js';
import {Link} from 'react-scroll';
import './Nav_style.css';
import {Col, Container, Row} from 'react-bootstrap'

const Nav_menu = () => {
    return(
        <nav className='Nav_menu_items'>
            <Container>
                <Row>
                    <ul className='Nav_ul'>
                        {MenuItem.map((item, index) => {
                            return(
                                <li key={index}>
                                    <Link to={item.title} className={item.Menu_name} smooth={true} offset={-380} duration={500}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </Row>  
            </Container>
        </nav>
    )
}

export default Nav_menu;