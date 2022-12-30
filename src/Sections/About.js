import {Container, Row, Col, Image, Card} from 'react-bootstrap';
import Univ from '../Image/University.gif'
import High from '../Image/High_School.png'
import mountain from '../Image/mountain.jpg'
import MyFace from '../Image/MyFace.jpg'
import { useEffect, useRef, useState } from 'react';

const About = () => {
    return(
        <section className='about' id='About'>
            <Container>
                <Row className='About_me' style={{paddingLeft: '0px'}}>
                    <Col className="My_background" md={4}>
                        <p>About Me</p>
                        <div className='profile_card'>
                            <div className='mountain_background'><img src={mountain}></img></div>
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
                    </Col>
                    <Col className="Edu_col1" md={4}>
                        <span>
                            <img src={High} style={{width:'50px', height:'50px'}} alt="No image"/>&nbsp;
                            태장고등학교 졸업 &#40; 2014 ~ 2017 &#41;
                        </span>
                    </Col>
                    <Col className="Edu_col2" md={4}>
                        <span>
                            <img src={Univ} style={{width:'46px', height:'46px'}} alt="No image"/>&nbsp;
                            명지대학교 졸업 &#40; 2017 ~ 2023 &#41;
                        </span>
                    </Col>
                    <Col className="Exp_col2" md={9}>
                        <p>Experience</p>
                        <span className='Exp_text'>준비중입니다...</span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;