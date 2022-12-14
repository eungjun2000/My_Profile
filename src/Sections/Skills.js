import HTML_carousel from '../Image/HTML_carousel_img.png'
import CSS_carousel from '../Image/CSS_carousel_img.png'
import Javascript_carousel from '../Image/Javascript_carousel_img.png'
import React_carousel from '../Image/React_carousel_img.png'
import Bootstrap_carousel from '../Image/Bootstrap_carousel_img.png'
import JQuery_carousel from '../Image/JQuery_carousel_img.png'
import Github_carousel from '../Image/Github_carousel_img.png'

import HTML_icon from '../Image/HTML_icon.png'
import CSS_icon from '../Image/CSS_icon.png'
import Javascript_icon from '../Image/Javascript_icon.png'
import React_icon from '../Image/React_icon.png'
import Bootstrap_icon from '../Image/Bootstrap_icon.png'
import Github_icon from '../Image/Github_icon.png'
import code_3d from '../Image/code_3d.png'
import phone_3d from '../Image/phone_3d.png'
import tweezers_3d from '../Image/tweezers_3d.png'

import {Container, Row, Col} from 'react-bootstrap'
import {config} from 'react-spring';
import {useState, Suspense} from 'react';
import {v4 as uuidv4} from "uuid";
import Carousel from 'react-spring-3d-carousel';

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
            content: (<img src={JQuery_carousel} alt='skill_image_6'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={Github_carousel} alt='skill_image_7'/>)
        }
    ].map((skill_img, index) => {
        return {...skill_img, onClick: () => setState({goToSlide: index})};
    });

    /*
    document.addEventListener('click', () => {
        if(state.goToSlide === 0){
            console.log("Hello");
            const card_HTML = document.querySelector('.card_HTML');
            state.goToSlide = -1;
        }else if(state.goToSlide === 1){
            const card_CSS = document.querySelector('.card_CSS');
            //card_CSS.style.marginTop = "-30px";
            //card_CSS.style.transition = "0.5s ";
            state.goToSlide = -1;
        }
    })
    */

    return(
        <div className='skills_outside'>
        <section className='skills' id='Skills'>
            <Container>
                <div style={{textAlign:'center'}}>
                    <div className='Skills_main'>SKILLS</div>
                        <span>
                            HTML, CSS, Javascript??? ????????????, Node js??? ????????? React ?????????????????? ?????? ??? ????????????.
                        </span>
                    </div>
                    <div className='carousel'>
                        <Row>
                            <Col md={2}></Col>
                            <Col md={8}>
                                <div style={{width: '100%', height: '15rem', margin: '0 0rem'}}>
                                    <Carousel
                                        slides={skill_image}
                                        goToSlide={state.goToSlide}
                                        offsetRadius={state.offsetRadius}
                                        animationConfig={state.config}  
                                    />
                                </div>
                            </Col>
                            <Col md={2}></Col>
                        </Row>
                    </div>

                    <div className='skills_txt'>Front End</div>

                    <Row className='skill_row'>
                        <Col md={6}>
                            <div className='threeD_container_front'>
                                <img src={code_3d} className='threeD_images' alt='No_Image'></img>
                                <div>
                                    <div className='threeD_title'>&lt;Development&#47;&gt;</div>
                                    <div className='threeD_text_front'>???????????? ??? ???????????? ????????? ?????? ?????? ???????????? ???????????????.</div>
                                </div>
                            </div>
                            <div className='threeD_container_front'>
                                <img src={phone_3d} className='threeD_images' alt='No_Image'></img>
                                <div>
                                    <div className='threeD_title'>&lt;Always Responsive&#47;&gt;</div>
                                    <div className='threeD_text_front'>????????? ???????????? ?????? ??????????????? ?????? ????????? ???????????? ????????? ??? ???????????? ????????????.</div>
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
                                    <div className='threeD_text_tool'>???????????? ??? ???????????? ????????? ?????? ?????? ???????????? ???????????????.</div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='Skill_progress' style={{marginTop:'75px'}}>
                                <img src={Github_icon} className='tool_icon' alt='tool_icon_1'></img>
                                <span className='titles'>&nbsp; Github</span>
                                <div className='skill_bar'>
                                    <span className='skill_percent gitHub'>
                                        <span className='tooltips gitHub'>99%</span>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </section>
        </div>
    );
}

export default Skills;