import {Container, Row, Col} from 'react-bootstrap';
import home from '../Image/home.png'
import mail from '../Image/mail.png'
import phone from '../Image/phone.png'
import astronaut from '../Image/astronaut.png'
import {useCallback, useEffect, useRef} from 'react';

const Contact = () => {
    const observeRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            console.log('entry', entry); 
        });
        observer.observe(observeRef.current);
    })

    return(
        <section className='contact' id='Contact'>
            <div class="zig-zag-top">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"/>

            <Container className='contact_container'>
                <Row>
                    <Col md={4}>
                        <div ref={observeRef}><img src={astronaut} className='astronaut'></img></div>
                    </Col>
                    <Col md={4}>
                        <div style={{fontSize: '20px', paddingTop: '15px'}}>Address</div><br/>
                        <div><img src={home}/>&nbsp; Home &nbsp; South Korea, Suwon</div><br/>
                        <div><img src={mail}/>&nbsp; Mail &nbsp; eungjun2000@gmail.com</div><br/>
                        <div><img src={phone}/>&nbsp; Phone &nbsp; +82 10 8426 4424</div>
                        <hr/>
                        
                        <div style={{fontSize: '20px'}}>Follow</div><br/>
                        <div>
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
                    </Col>
                    <Col md={4}>
                        <form className='contact_form' action="https://formsubmit.co/2676625dd12c557c19842dd77887a93a" method="POST">
                            <div style={{fontSize: '30px'}}>Contact me</div>
                            <input type="text" id="name" placeholder='Input your name' required></input>
                            <input type="email" id="email" placeholder='Input your email' required></input>
                            <textarea id="message" rows="5"></textarea>
                            <button type='submit'>Send</button>
                        </form>
                    </Col>
                    <hr/>
                    <div style={{textAlign: 'center', fontSize: '15px', paddingBottom: '13px'}}>ⓒ 2022 All right reserved</div>
                </Row>
            </Container>
            </div>
        </section>
    )
}

export default Contact;