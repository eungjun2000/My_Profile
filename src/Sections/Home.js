import Typical from 'react-typical';
import {MenuItem} from '../Navigation_bar/Nav_menu_items.js';
import {Container, Row, Col} from 'react-bootstrap';
import Lottie from 'lottie-react';
import Web_Developer_Anim from '../Animation/Web_Developer_Anim.json'

const Show_Intro = () => {
    return(
        <section className='home' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col className='Show_Intro' md={3}>
                        I'm a{' '}
                        <Typical
                            loop={Infinity}
                            wrapper='span'
                            steps={[    
                            'UI/UX designer.', 3000,
                            'also...', 3000,
                            'front end developer.', 3000
                            ]}
                        />
                    </Col>
                    <Col className='Show_Intro_sub' md={3}>
                        <h1>Welcome to my website. I'm Eung Jun kang, a UI/UX designer and developer.</h1><br/>
                        <p>⦁ &nbsp; UI/UX design</p>
                        <p>⦁ &nbsp; Front end develop</p>
                    </Col>
                    <Col className='anim' md={6}>
                        <Lottie
                                animationData={Web_Developer_Anim}
                                loop={true}
                                autoplay={true}
                                style={{
                                    width: '500px',
                                    height: '500px',
                                    display: 'inline-block'
                                }}
                            />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Show_Intro;