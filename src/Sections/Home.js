import Typical from 'react-typical';
import {useCallback} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import Lottie from 'lottie-react';
import Web_Developer_Anim from '../Animation/Web_Developer_Anim.json'
import ParticleBack from '../ParticlesBack';

const Home = () => {    
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    return(
        <section className='home' id='Home'>
   
            <div className='particle_container'>
                <ParticleBack></ParticleBack>
            </div>
    
            <Container className='home_container'>
            
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
                        <button className='contact_btn'>CONTACT ME</button>
                    </Col>
                    <Col className='Web_dev_anim' md={5}>
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