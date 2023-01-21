import Typical from 'react-typical';
import {Container, Row, Col} from 'react-bootstrap';
import Lottie from 'lottie-react';
import Web_Developer_Anim from '../../Animation/Web_Developer_Anim.json'
import ParticleBack from '../../ParticlesBack';

const Home = () => {
    const gotoContact = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }

    return(
        <section className='home' id='Home'>
            <ParticleBack/>
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
                        <button className='contact_btn' onClick={gotoContact}>CONTACT ME</button>
                    </Col>
                    <Col className='Web_dev_anim' md={5}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blob'>
                        <path fill="#FF0066" d="M45.4,-55.8C59.2,-42.6,70.9,-28.6,73.8,-12.9C76.7,2.8,70.8,20.1,61.2,34C51.6,47.9,38.3,58.4,22.6,65.6C6.9,72.7,-11.2,76.7,-29,73.1C-46.8,69.4,-64.2,58.3,-71.1,42.8C-78,27.3,-74.4,7.4,-69.9,-11.3C-65.5,-30.1,-60.1,-47.7,-48.3,-61.3C-36.5,-74.9,-18.3,-84.5,-1.2,-83.1C15.8,-81.6,31.6,-69.1,45.4,-55.8Z" transform="translate(100 100)" />
                    </svg>
                        <Lottie
                            animationData={Web_Developer_Anim}
                            loop={true}
                            autoplay={true}
                            style={{
                                width: '650px',
                                height: '650px',
                                padding: '35px 50px 0px 30px',
                                zIndex: '2'
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;