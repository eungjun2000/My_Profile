import Typical from 'react-typical';
import {Container, Row, Col} from 'react-bootstrap';
import Lottie from 'lottie-react';
import Web_Developer_Anim from '../Animation/Web_Developer_Anim.json'

const Show_Intro = () => {
    return(
        <section className='home' id='Home'>
            <Container>
                <Row className="home_row">
                    <Col className='Show_Intro' md={7}>
                        Hi!<br/>
                        I'm a<br/>&lt;
                        <Typical
                            loop={Infinity}
                            wrapper='span'
                            steps={[
                            'UI/UX designer.', 3000,
                            'front end developer.', 3000
                            ]}
                        />
                        &#47;&gt;
                        <h3>Welcome to my website. I'm Eung Jun kang, a UI/UX designer and Front end developer.</h3>
                        <p style={{paddingTop:'30px'}}>⦁ &nbsp; UI/UX design</p>
                        <p>⦁ &nbsp; Front end develop</p>
                    </Col>
                    <Col className='Web_dev_anim' md={5}>
                        <Lottie
                            animationData={Web_Developer_Anim}
                            loop={true}
                            autoplay={true}
                            style={{
                                width: '550px',
                                height: '550px',
                                padding: '80px 50px 0px 50px'
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Show_Intro;