import HTML_carousel from '../../Image/HTML_carousel_img.png'
import CSS_carousel from '../../Image/CSS_carousel_img.png'
import Javascript_carousel from '../../Image/Javascript_carousel_img.png'
import React_carousel from '../../Image/React_carousel_img.png'
import Bootstrap_carousel from '../../Image/Bootstrap_carousel_img.png'
import Github_carousel from '../../Image/Github_carousel_img.png'

import HTML_icon from '../../Image/HTML_icon.png'
import CSS_icon from '../../Image/CSS_icon.png'
import Javascript_icon from '../../Image/Javascript_icon.png'
import React_icon from '../../Image/React_icon.png'
import Bootstrap_icon from '../../Image/Bootstrap_icon.png'
import Github_icon from '../../Image/Github_icon.png'
import Npm_icon from '../../Image/Npm_icon.png'
import code_3d from '../../Image/code_3d.png'
import phone_3d from '../../Image/phone_3d.png'
import tweezers_3d from '../../Image/tweezers_3d.png'
import trophy_3d from '../../Image/trophy_3d.png'

import {Container, Row, Col} from 'react-bootstrap'
import {config} from 'react-spring';
import {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import Carousel from 'react-spring-3d-carousel';
import {IconButton} from '@mui/material'
import {NavigateBefore, NavigateNext} from '@mui/icons-material'

const Skills = () => {
    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 4,
        config: config.gentle
    });

    const skill_image = [
        {
            key: uuidv4(),
            content: (<img src={HTML_carousel} alt='skill_image_1'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={CSS_carousel} alt='skill_image_2'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={Javascript_carousel} alt='skill_image_3'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={React_carousel} alt='skill_image_4'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={Bootstrap_carousel} alt='skill_image_5'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={Github_carousel} alt='skill_image_6'/>)
        }
    ].map((skill_img, index) => {
        return {...skill_img, onClick: () => setState({goToSlide: index})};
    });

    const Prev_skill = () => {
        setState((slideState) => {
            return{...slideState, goToSlide: slideState.goToSlide - 1}
        });
    }

    const Next_skill = () => {
        setState((slideState) => {
            return{...slideState, goToSlide: slideState.goToSlide + 1}
        });
    }

    return(
        <div className='skills_outside'>
        <section className='skills' id='Skills'>
            <Container>
                <div style={{textAlign:'center'}}>
                    <div className='Skills_main'>SKILLS</div>
                    <span className='Skills_comment'>
                        <div>HTML, CSS, Javascript를 바탕으로, React, 반응형 웹을 위한 Bootstrap 라이브러리를 다룰 수 있습니다.</div>
                    </span>
                    </div>
                    <div className='carousel'>
                        <Row>
                            <Col md={2} className='slide_btn'>
                                <div>
                                    <IconButton
                                        color='black'
                                        onClick={Prev_skill}
                                    ><NavigateBefore fontSize='large'/>
                                    </IconButton>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div style={{width: '110%', height: '16rem', margin: '10px 0px 0px -30px'}}>
                                    <Carousel
                                        slides={skill_image}
                                        goToSlide={state.goToSlide}
                                        offsetRadius={state.offsetRadius}
                                        animationConfig={state.config}
                                    />
                                </div>
                            </Col>
                            <Col md={2} className='slide_btn'>
                                <div>
                                    <IconButton
                                        color='black'
                                        onClick={Next_skill}
                                    ><NavigateNext fontSize='large'/>
                                    </IconButton>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className='skills_txt'>Front End</div>

                    <Row className='skill_row'>
                        <Col md={6}>
                            <div className='threeD_container_front'>
                                <img src={code_3d} className='threeD_images' alt='No_Image'></img>
                                <div>
                                    <div className='threeD_title'>&lt;Development&#47;&gt;</div>
                                    <div className='threeD_text_front'>진보적인 웹 사이트를 만들기 위한 최신 기술들을 적용합니다.</div>
                                </div>
                            </div>
                            <div className='threeD_container_front'>
                                <img src={phone_3d} className='threeD_images' alt='No_Image'></img>
                                <div>
                                    <div className='threeD_title'>&lt;Always Responsive&#47;&gt;</div>
                                    <div className='threeD_text_front'>기기에 상관없이 모든 사용자들을 위해 반응형 디자인이 적용된 웹 사이트를 만듭니다.</div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='Skill_progress'>
                                <img src={HTML_icon} className='skill_icon' alt='skill_icon_1'></img>
                                <span className='titles'>&nbsp; HTML</span>
                                <div className='skill_bar'>
                                    <span className='skill_percent html'>
                                        <span className='tooltips html'>98%</span>
                                    </span>
                                </div>
                            </div>
                            <div className='Skill_progress'>
                                <img src={CSS_icon} className='skill_icon' alt='skill_icon_2'></img>
                                <span className='titles'>&nbsp; CSS</span>
                                <div className='skill_bar'>
                                    <span className='skill_percent css'>
                                        <span className='tooltips css'>95%</span>
                                    </span>
                                </div>
                            </div>
                            <div className='Skill_progress'>
                                <img src={Javascript_icon} className='skill_icon' alt='skill_icon_3'></img>
                                <span className='titles'>&nbsp; Javascript</span>
                                <div className='skill_bar'>
                                    <span className='skill_percent javascript'>
                                        <span className='tooltips javascript'>88%</span>
                                    </span>
                                </div>
                            </div>
                            <div className='Skill_progress'>
                                <img src={React_icon} className='skill_icon' alt='skill_icon_4'></img>
                                <span className='titles'>&nbsp; React</span>
                                <div className='skill_bar'>
                                    <span className='skill_percent react'>
                                        <span className='tooltips react'>85%</span>
                                    </span>
                                </div>
                            </div>
                            <div className='Skill_progress'>
                                <img src={Bootstrap_icon} className='skill_icon' alt='skill_icon_5'></img>
                                <span className='titles'>&nbsp; Bootstrap</span>
                                <div className='skill_bar'>
                                    <span className='skill_percent bootstrap'>
                                        <span className='tooltips bootstrap'>87%</span>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                    <br/><br/><div className='skills_txt'>Tools</div>

                    <Row className='skill_row'>
                        <Col md={6}>
                            <div className='threeD_container_tool'>
                                <img src={tweezers_3d} className='threeD_images' alt='No_Image'></img>
                                <div>
                                    <div className='threeD_title'>&lt;Tool&#47;&gt;</div>
                                    <div className='threeD_text_tool'>웹 사이트 개발, 유지보수를 위한 도구들을 사용할 수 있습니다.</div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='Skill_progress'>
                                <img src={Github_icon} className='tool_icon' alt='tool_icon_1'></img>
                                <span className='titles'>&nbsp; Github</span>
                                <div className='skill_bar'>
                                    <span className='skill_percent gitHub'>
                                        <span className='tooltips gitHub'>99%</span>
                                    </span>
                                </div>
                            </div>
                            <div className='Skill_progress'>
                                <img src={Npm_icon} className='tool_icon' alt='tool_icon_2'></img>
                                <span className='titles'>&nbsp; Npm</span>
                                <div className='skill_bar'>
                                    <span className='skill_percent Npm'>
                                        <span className='tooltips Npm'>98%</span>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <br/><br/><div className='skills_txt'>License</div>

                    <Row className='license_row'>
                        <Col md={3} className='license_container'>
                            <img src={trophy_3d} className='trophy_icon' alt='No_image'/><hr/>
                            <Row style={{justifyContent:'center'}}>
                                <Col md={4}>
                                    <span className='license_content'>
                                        <div className='license_item'>자격증 명</div>
                                        <div className='liner'></div>
                                        정보처리기사
                                    </span>
                                </Col>
                                <Col md={3}>
                                    <span className='license_content'>
                                        <div className='license_item'>취득일</div>
                                        <div className='liner'></div>
                                        2023.09
                                    </span>
                                </Col>
                                <Col md={3}>
                                    <span className='license_content'>
                                        <div className='license_item'>합/불 여부</div>
                                        <div className='liner'></div>
                                        합
                                    </span>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={3} className='license_container'>
                            <img src={trophy_3d} className='trophy_icon' alt='No_image'/><hr/>
                            <Row style={{justifyContent:'center'}}>
                                <Col md={3}>
                                    <span className='license_content'>
                                        <div className='license_item'>자격증 명</div>
                                        <div className='liner'></div>
                                        TOEIC
                                    </span>
                                </Col>
                                <Col md={3}>
                                    <span className='license_content'>
                                        <div className='license_item'>취득일</div>
                                        <div className='liner'></div>
                                        2022.09
                                    </span>
                                </Col>
                                <Col md={3}>
                                    <span className='license_content'>
                                        <div className='license_item'>점수</div>
                                        <div className='liner'></div>
                                        765
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                        
                        <Col md={3} className='license_container'>
                            <img src={trophy_3d} className='trophy_icon' alt='No_image'/><hr/>
                            <Row style={{justifyContent:'center'}}>
                                <Col md={6}>
                                    <span className='license_content'>
                                        <div className='license_item'>자격증 명</div>
                                        <div className='liner'></div>
                                        2종보통운전면허(자동)
                                    </span>
                                </Col>
                                <Col md={3}>
                                    <span className='license_content'>
                                        <div className='license_item'>취득일</div>
                                        <div className='liner'></div>
                                        2022.07
                                    </span>
                                </Col>
                                <Col md={3}>
                                    <span className='license_content'>
                                        <div className='license_item'>합/불 여부</div>
                                        <div className='liner'></div>
                                        합
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            </Container>
        </section>
        </div>
    );
}

export default Skills;