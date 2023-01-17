import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import MyProfile from '../../Image/Work_MyProfile.png'
import NotReady from '../../Image/Work_NotReady.jpg'

const Works = () => {
    return(
        <section className='works' id='Works'>
            <Container>
                <div className='Works_main'>WORKS</div>
                <span className='Works_comment'>
                    <div>그 동안 진행했던 프로젝트들을 소개합니다.</div>
                </span>
                <Row className='work_row'>
                    <Col md={6}>
                        <Card border='0' className='myprofile_card'>
                            <Card.Img src={MyProfile}/>
                            <Card.Body>
                                <Card.Title>My Profile</Card.Title>
                                <Card.Text className='card_text'>
                                    제 자신을 소개한 웹 페이지입니다. + 구성, 참여도, tools ...
                                </Card.Text>
                                <Button variant="primary">Visit Website</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card border='0' className='myprofile_card'>
                            <Card.Img src={NotReady}/>
                            <Card.Body>
                                <Card.Title>Not Ready</Card.Title>
                                <Card.Text className='card_text'>
                                    프로젝트 준비 중입니다...
                                </Card.Text>
                                <Button variant="primary">Visit Website</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <Row className='work_row'>
                    <Col md={6}>
                        <Card border='0' className='myprofile_card'>
                            <Card.Img src={NotReady}/>
                            <Card.Body>
                                <Card.Title>Not Ready</Card.Title>
                                <Card.Text className='card_text'>
                                    프로젝트 준비 중입니다...
                                </Card.Text>
                                <Button variant="primary">Visit Website</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card border='0' className='myprofile_card'>
                            <Card.Img src={NotReady}/>
                            <Card.Body>
                                <Card.Title>Not Ready</Card.Title>
                                <Card.Text className='card_text'>
                                    프로젝트 준비 중입니다...
                                </Card.Text>
                                <Button variant="primary">Visit Website</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='work_row'>
                    <Col md={6}>
                        <Card border='0' className='myprofile_card'>
                            <Card.Img src={NotReady}/>
                            <Card.Body>
                                <Card.Title>Not Ready</Card.Title>
                                <Card.Text className='card_text'>
                                    프로젝트 준비 중입니다...
                                </Card.Text>
                                <Button variant="primary">Visit Website</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card border='0' className='myprofile_card'>
                            <Card.Img src={NotReady}/>
                            <Card.Body>
                                <Card.Title>Not Ready</Card.Title>
                                <Card.Text className='card_text'>
                                    프로젝트 준비 중입니다...
                                </Card.Text>
                                <Button variant="primary">Visit Website</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Works;