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
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import CardHeader from 'react-bootstrap/esm/CardHeader'
const Skills = () => {
    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 4,
        config: config.gentle
    });

    const skill_image = [
        {
            key: uuidv4(),
            content: (<img src={HTML_img} alt='skill_image_1'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={CSS_img} alt='skill_image_2'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={Javascript_img} alt='skill_image_3'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={React_img} alt='skill_image_4'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={NodeJS_img} alt='skill_image_5'/>)
        }
    ].map((skill_img, index) => {
        return {...skill_img, onClick: () => setState({goToSlide: index})};
    });

    if(state.goToSlide === 2){
        console.log("Wow!");
    }

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
                                <div style={{width: "90%", height: "25rem", margin: "0 2.5rem"}}>
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
                            <Col className='Skill_progress' md={2}>
                            <Card className='card'>
                                HTML
                                <div style={{}}>
                                    <div style={{background:"linear-gradient(to bottom right, blue, pink)"}}>
                                        <CircularProgressbar className='CircleProgressBar' value={98} text='98%' styles={buildStyles({
                                            strokeLinecap: "butt",
                                            textColor: "#FF7576",
                                            pathColor: "#FF7576"
                                        }
                                        )}></CircularProgressbar>
                                    </div>
                                    </div>
                                <br/>
                                <div className="HTML_progress">
                                </div>
                            </Card>
                            </Col>
                            
                    </Row>
            </Container>
        </section>
    );
}

export default Skills;