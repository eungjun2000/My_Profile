import {Container, Row, Col} from 'react-bootstrap';

const Contact = () => {
    return(
        <footer className='contact' id='Contact'>
            <div class="zig-zag-top">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"/>
            <Container className='contact_container'>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                    <a className="icon facebook" href="https://www.facebook.com/profile.php?id=100006064057937" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="icon github" href="https://github.com/eungjun2000" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="icon instagram" href="https://www.instagram.com/lightning_kang/" target="_blank">
                        <i className="fab fa-instagram" target="_blank"></i>
                    </a>
                    </Col>
                    <Col className='contact_form_col' md={4}>
                        <form className='contact_form' action="https://formsubmit.co/2676625dd12c557c19842dd77887a93a" method="POST">
                            <div className='contact_me_Text'>Contact me</div>
                            <input type="text" id="name" placeholder='Input your name' required></input>
                            <input type="email" id="email" placeholder='Input your email' required></input>
                            <textarea id="message" rows="5"></textarea>
                            <button type='submit'>Send</button>
                        </form>
                    </Col>
                </Row>
            </Container>
            </div>
        </footer>
    )
}

export default Contact;