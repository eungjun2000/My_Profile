import {Container, Row, Col, Image, Card} from 'react-bootstrap';
import Univ from '../Image/University.gif'
import High from '../Image/High_School.png'
import mountain from '../Image/mountain.jpg'
import brigde from '../Image/bridge.jpg'
import File_not_found from '../Image/File_not_found.png'
import space from '../Image/space.jpg'
import MyFace from '../Image/MyFace.jpg'
import ReactCardFlip from 'react-card-flip';
import {useState} from 'react';

const About = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flip = () => {
        setIsFlipped(!isFlipped);
    }

    return(
        <section className='about' id='About'>
            <Container>
                <div className='About_main'>About</div>
                <span className='About_comment'>
                    <div>저에 대한 소개 및 학력, 경험 등을 소개합니다.</div>
                </span>
                <Row>
                    <Col md={4}>
                        <p>About Me</p>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerStyle={{
                                transform: 'preserve-3d',
                                transition: '0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}>
                            <div className='profile_card' onClick={flip}>
                                <div className='mountain_background'><img src={mountain} alt="No image"></img></div>
                                <div className='myface'><img src={Univ}></img></div>
                                <div className='Myback_text'>
                                    <h3>Who am I?</h3>
                                    <span>
                                        안녕하세요. 웹 UI/UX 디자인 및 프론트엔드 개발을 위해 항상 공부하고, 노력하고 있습니다.
                                        사용자들의 시선을 사로잡을 수 있는 웹 페이지 디자인뿐만 아니라 그에 맞춘 혁신적인 기능까지 생각해낼 수 있습니다. 
                                        생각하는 것에 그치지 않고 제가 가진 세심한 성격으로 웹의 세부적인 부분을 보고 그리며, 웹 페이지의 기능이 잘 동작하도록
                                        구현할 수 있습니다.
                                    </span>
                                </div>
                            </div>
                            <div className='card_back' onClick={flip}>
                                <span>Hello World!</span>
                            </div>
                        </ReactCardFlip>
                    </Col>
                    <Col md={4}>
                        <p>Educational background</p>
                        <div className='profile_card'>
                            <div className='bridge_background'><img src={brigde} alt="No image"></img></div>
                            <div className='high_school'><img src={High} alt="No image"></img></div>
                            <div className='Edu_text'><span>태장고등학교 &#41;</span></div>
                            <div className='univ'><img src={Univ} alt="No image"></img></div>
                            <div className='Edu_text'><span>명지대학교 졸업 &#40; 2014 ~ 2017 &#41;</span></div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <p>Experience</p>
                        <div className='profile_card'>
                            <div className='space_background'><img src={space} alt="No image"></img></div>
                            <div className='experience'><img src={File_not_found}></img></div>
                            <div className='Exp_text'>
                                <h3>Not found!</h3>
                                <span>준비중입니다...</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;