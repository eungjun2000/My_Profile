import {Container, Row, Col, Image, Card} from 'react-bootstrap';
import Univ from '../Image/University.gif'
import High from '../Image/High_School.png'
import mountain from '../Image/mountain.jpg'
import brigde from '../Image/bridge.jpg'
import space from '../Image/space.png'
import MyFace from '../Image/MyFace.jpg'
import Rotate from '../Image/rotate.png'
import ReactCardFlip from 'react-card-flip';
import {useState, useEffect, useRef} from 'react';
import {ScrollContainer, ScrollPage} from "react-scroll-motion";

const About = () => {
    const [isFlipped_about, setIsFlipped_about] = useState(false);
    const [isFlipped_edu, setIsFlipped_edu] = useState(false);
    const card1Ref = useRef();
    const card2Ref = useRef();
    const card3Ref = useRef();

    const flip_about = () => {
        setIsFlipped_about(!isFlipped_about);
    }
    const flip_edu = () => {
        setIsFlipped_edu(!isFlipped_edu);
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entry) => {
            const elem = entry[0];
            if(elem.isIntersecting){
                elem.target.style.opacity = 1;
                elem.target.style.margin = '0px 0px 0px 0px';
            }else{
                elem.target.style.opacity = 0;
                elem.target.style.margin = '80px 0px 0px 0px';
            }
            return(() => {if(card1Ref.current){observer.unobserve(card1Ref.current);}});
        }, {threshold : 0.2})
        observer.observe(card1Ref.current);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entry) => {
            const elem = entry[0];
            if(elem.isIntersecting){
                elem.target.style.opacity = 1;
                elem.target.style.margin = '0px 0px 0px 0px';
            }else{
                elem.target.style.opacity = 0;
                elem.target.style.margin = '80px 0px 0px 0px';
            }
            return(() => {if(card2Ref.current){observer.unobserve(card2Ref.current);}});
        }, {threshold : 0.3})
        observer.observe(card2Ref.current);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entry) => {
            const elem = entry[0];
            if(elem.isIntersecting){
                elem.target.style.opacity = 1;
                elem.target.style.margin = '0px 0px 0px 0px';
            }else{
                elem.target.style.opacity = 0;
                elem.target.style.margin = '80px 0px 0px 0px';
            }
            return(() => {if(card3Ref.current){observer.unobserve(card3Ref.current);}});
        }, {threshold : 0.4})
        observer.observe(card3Ref.current);
    }, []);

    return(
        <section className='about' id='About'>
            <Container className='ee'>
            <ScrollContainer>
                <div className='About_main'>About</div>
                <span className='About_comment'>
                    <div>저에 대한 소개 및 학력, 경험 등을 소개합니다.</div>
                </span>
                <Row>
                    <Col md={4}>
                        <div style={{transition: 'all 0.5s ease'}} ref={card1Ref}>
                            <p>About Me</p>
                            <ReactCardFlip isFlipped={isFlipped_about} flipDirection="horizontal">
                                <div className='profile_card front' onClick={flip_about}>
                                    <div className='mountain_background'><img src={mountain} alt="No image"></img></div>
                                    <div className='Myback_text'>
                                        <h3 style={{margin: '15px 0px 30px 0px'}}>Kang Eung Jun</h3>
                                        <div style={{fontSize:'17px', color:'blue'}}>&lt;Web developer&#47;&gt;</div><br/>
                                        <img src={Rotate} style={{width:'20px', height:'20px', marginBottom:'7px'}} alt="No image"></img>&nbsp;&nbsp;
                                        <span style={{fontSize:'20px'}}>click to rotate</span><br/><br/>
                                        <div style={{marginLeft:'16px'}}>
                                            <a className="icon facebook" href="https://www.facebook.com/profile.php?id=100006064057937" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a className="icon github" href="https://github.com/eungjun2000" target="_blank">
                                                <i className="fab fa-github"></i>
                                            </a>
                                            <a className="icon instagram" href="https://www.instagram.com/lightning_kang/" target="_blank">
                                                <i className="fab fa-instagram" target="_blank"></i>
                                            </a>
                                            <a className="icon youtube" href="https://www.youtube.com/channel/UCNcI_iIQIhmEfcJYc3YAkfA" target="_blank">
                                                <i className="fab fa-youtube" target="_blank"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='profile_card back' onClick={flip_about}>
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
                            </ReactCardFlip>
                        </div>
                    </Col>
                    <Col md={4}>
                        <ScrollPage>
                        <div style={{transition: 'all 0.5s ease'}} ref={card2Ref}>
                        <p>Educational background</p>
                            <ReactCardFlip isFlipped={isFlipped_edu} flipDirection="horizontal">
                                <div className='profile_card front' onClick={flip_edu}>
                                    <div className='bridge_background_front'><img src={brigde} alt="No image"></img></div>
                                </div>
                                <div className='profile_card back' onClick={flip_edu}>
                                    <div className='bridge_background'><img src={brigde} alt="No image"></img></div>
                                    <div className='high_all'>
                                        <img src={High} className='high_school' alt="No image"></img>
                                        <span>&nbsp;&nbsp;태장고등학교 졸업 &#40; 2014 ~ 2017 &#41;</span>
                                    </div>
                                    <div className='univ_all'>
                                        <img src={Univ} className='univ' alt="No image"></img>
                                        <span>&nbsp;&nbsp;명지대학교 컴퓨터공학과 졸업 &#40; 2017 ~ 2023 &#41;</span>
                                    </div>
                                </div>
                            </ReactCardFlip>
                        </div>
                        </ScrollPage>
                    </Col>
                    <Col md={4}>

                        <div style={{transition: 'all 0.5s ease'}} ref={card3Ref}>
                        <p>Experience</p>
                            <div className='profile_card'>
                                <div className='space_background'><img src={space} alt="No image"></img></div>
                                <div className='Exp_text'>
                                    <h3>Not found!</h3>
                                    <span>준비중입니다...</span>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </ScrollContainer>    
            </Container>
        </section>
    )
}

export default About;