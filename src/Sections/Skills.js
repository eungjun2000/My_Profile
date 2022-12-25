import HTML_hex_img from '../Image/HTML_hex_img.png'
import CSS_hex_img from '../Image/CSS_hex_img.png'
import Javascript_hex_img from '../Image/Javascript_hex_img.png'
import React_hex_img from '../Image/React_hex_img.png'
import NodeJS_hex_img from '../Image/NodeJS_hex_img.png'

import HTML_img from '../Image/HTML_img.png'
import CSS_img from '../Image/CSS_img.png'
import Javascript_img from '../Image/Javascript_img.png'
import React_img from '../Image/React_img.png'
import NodeJS_img from '../Image/NodeJS_img.png'

import {Container, Row, Col, ProgressBar, Card} from 'react-bootstrap'
import {config} from 'react-spring';
import {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import Carousel from 'react-spring-3d-carousel';
import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 4,
        config: config.gentle
    });

    const skill_image = [
        {
            key: uuidv4(),
            content: (<img src={HTML_hex_img} alt='skill_image_1'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={CSS_hex_img} alt='skill_image_2'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={Javascript_hex_img} alt='skill_image_3'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={React_hex_img} alt='skill_image_4'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={NodeJS_hex_img} alt='skill_image_5'/>)
        }
    ].map((skill_img, index) => {
        return {...skill_img, onClick: () => setState({goToSlide: index})};
    });

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

    return(
        <section className='skills' id='Skills'>
            <Container>
                <div className='Skills_main'>Skills</div>
                    <span className='Skills_comment'>
                        HTML, CSS, Javascript를 바탕으로, Node js를 이용한 React 라이브러리를 다룰 수 있습니다.
                    </span>
                    <div className='carousel'>
                        <Row>
                            <Col md={2}></Col>
                            <Col md={8}>
                                <div style={{width: '100%', height: '20rem', margin: '0 0rem'}}>
                                    <Carousel
                                        slides={skill_image}
                                        goToSlide={state.goToSlide}
                                        offsetRadius={state.offsetRadius}
                                        animationConfig={state.config}  
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col md={1}></Col>
                        <Col className='Skill_progress' md={2}>
                            <Card className='card card_HTML'>
                                <div className='card_upside' style={{background:"#FF7576"}}></div>
                                    <div className='circular_progress'>
                                        <CircularProgressbarWithChildren className='CircleProgressBar' value={96} background backgroundPadding={5}
                                        styles={buildStyles({
                                            backgroundColor: "#282c35",
                                            pathColor: "#FF7576",
                                            trailColor: "transparent"
                                        })}>
                                            <Card.Img src={HTML_img} variant="top" style={{width: '50%', marginTop: 4}} alt='No Image'/>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                    <br/>
                                    <div className='text_part'>
                                        HTML : 96%
                                    </div>
                                <br/>
                                <ProgressBar now="96" variant="danger" style={{height: '5px'}} striped animated></ProgressBar>
                                
                            </Card>
                        </Col>
                        <Col className='Skill_progress' md={2}>
                            <Card className='card card_CSS'>
                                <div className='card_upside' style={{background:"#0677d5"}}></div>
                                    <div className='circular_progress'>
                                        <CircularProgressbarWithChildren className='CircleProgressBar' value={92} background backgroundPadding={5}
                                        styles={buildStyles({
                                            backgroundColor: "#282c35",
                                            pathColor: "#0677d5",
                                            trailColor: "transparent"
                                        })}>
                                            <Card.Img src={CSS_img} variant="top" style={{width: '50%', marginTop: 4}} alt='No Image'/>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                    <br/>
                                    <div className='text_part'>
                                        CSS : 92%
                                    </div>
                                <br/>
                                <ProgressBar now="92" style={{height: '5px'}} striped animated></ProgressBar>
                            </Card>
                        </Col>
                        <Col className='Skill_progress' md={2}>
                            <Card className='card card_JS'>
                                <div className='card_upside' style={{background:"#e9d85f"}}></div>
                                    <div className='circular_progress'>
                                        <CircularProgressbarWithChildren className='CircleProgressBar' value={90} background backgroundPadding={5}
                                        styles={buildStyles({
                                            backgroundColor: "#282c35",
                                            pathColor: "#e9d85f",
                                            trailColor: "transparent"
                                        })}>
                                            <Card.Img src={Javascript_img} variant="top" style={{width: '50%', marginTop: 4}} alt='No Image'/>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                    <br/>
                                    <div className='text_part'>
                                        Javascript : 90%
                                    </div>
                                <br/>
                                <ProgressBar now="90" variant="warning" style={{height: '5px'}} striped animated></ProgressBar>
                            </Card>
                        </Col>
                        <Col className='Skill_progress' md={2}>
                            <Card className='card card_JS'>
                                <div className='card_upside' style={{background:"#a3cfff"}}></div>
                                    <div className='circular_progress'>
                                        <CircularProgressbarWithChildren className='CircleProgressBar' value={90} background backgroundPadding={5}
                                        styles={buildStyles({
                                            backgroundColor: "#282c35",
                                            pathColor: "#a3cfff",
                                            trailColor: "transparent"
                                        })}>
                                            <Card.Img src={React_img} variant="top" style={{width: '60%', marginTop: 1}} alt='No Image'/>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                    <br/>
                                    <div className='text_part'>
                                        React : 90%
                                    </div>
                                <br/>
                                <ProgressBar now="90" variant="info" style={{height: '5px'}} striped animated></ProgressBar>
                            </Card>
                        </Col>
                        <Col className='Skill_progress' md={2}>
                            <Card className='card card_JS'>
                                <div className='card_upside' style={{background:"#17a870"}}></div>
                                    <div className='circular_progress'>
                                        <CircularProgressbarWithChildren className='CircleProgressBar' value={80} background backgroundPadding={5}
                                        styles={buildStyles({
                                            backgroundColor: "#282c35",
                                            pathColor: "#17a870",
                                            trailColor: "transparent"
                                        })}>
                                            <Card.Img src={NodeJS_img} variant="top" style={{width: '55%', marginTop: 0.2}} alt='No Image'/>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                    <br/>
                                    <div className='text_part'>
                                        NodeJS : 80%
                                    </div>
                                <br/>
                                <ProgressBar now="80" variant="success" style={{height: '5px'}} striped animated></ProgressBar>
                            </Card>
                        </Col>
                    </Row>
            </Container>
        </section>
    );
}

export default Skills;