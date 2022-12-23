import {Container, Row, Col} from 'react-bootstrap';
import Lottie from 'lottie-react';
import Profile_Anim from '../Animation/Profile_Anim.json'
import Univ from '../Image/University.gif'
import High from '../Image/High_School.png'

const About = () => {
    return(
        <section className='about' id='About'>
            <Container>
                <Row className='About_me'>
                    <Col className="My_profile_anim" md={3}>
                        <Lottie
                            animationData={Profile_Anim}
                            loop={true}
                            autoplay={true}
                            style={{
                                width: '250px',
                                height: '250px',
                                padding: '0px 50px 100px 0px'
                            }}
                            /* padding Attr : top, right, bottom, left */
                        />
                    </Col>
                    <Col className="My_background" md={9}>
                        <p>About Me</p>
                        <span>
                            안녕하세요. 웹 UI/UX 디자인 및 프론트엔드 개발을 위해 항상 공부하고, 노력하고 있습니다.
                            사용자들의 시선을 사로잡을 수 있는 웹 페이지 디자인뿐만 아니라 그에 맞춘 혁신적인 기능까지 생각해낼 수 있습니다. 
                            생각하는 것에 그치지 않고 제가 가진 세심한 성격으로 웹의 세부적인 부분을 보고 그리며, 웹 페이지의 기능이 잘 동작하도록
                            구현할 수 있습니다.
                        </span>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}></Col>
                    <Col md={9}>
                        <p>Educational Background</p>
                    </Col>
                </Row>
                <Row className='Educational_background'>
                    <Col md={3}></Col>
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
                </Row>

                <Row className='Experience'>
                    <Col md={3}></Col>
                    <Col className="Exp_col2" md={9}>
                        <p>Experience</p>
                        <span>
                            준비 중입니다...
                        </span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;