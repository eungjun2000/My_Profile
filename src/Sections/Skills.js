import Univ from '../Image/University.gif'
import High from '../Image/High_School.png'
import Orange from '../Image/Orange_temp.jpg'
import {Container, Row, Col} from 'react-bootstrap'
import {config} from 'react-spring';
import {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import Carousel from 'react-spring-3d-carousel';

const Skills = () => {
    const [state, setState] = useState({
        goToSlide: 0,
        showNavigation: true,
        config: config.gentle
    });

    const skill_image = [
        {
            key: uuidv4(),
            content: (<img src={Univ} alt='skill_image_1'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={Orange} alt='skill_image_2'/>)
        },
        {
            key: uuidv4(),
            content: (<img src={High} alt='skill_image_3'/>)
        }
    ].map((skill_img, index) => {
        return {...skill_img, onClick: () => setState({goToSlide: index})};
    });

    return(
        <section className='skills' id='Skills'>
            <Container>
                <div className='carousel'>
                    <Row>
                        <Col md={3}>
                            <div style={{width: "30%", height: "17rem", margin: "0 4.5rem"}}>
                                <Carousel
                                    slides={skill_image}
                                    goToSlide={state.goToSlide}
                                    showNavigation={state.showNavigation}
                                    animationConfig={state.config}
                                />
                                <div
                                    style={{
                                    margin: "0 auto",
                                    marginTop: "2rem",
                                    width: "50%",
                                    display: "flex",
                                    justifyContent: "space-around"
                                }}
                            ></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default Skills;