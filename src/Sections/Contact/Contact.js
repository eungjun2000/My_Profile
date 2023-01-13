import {Container, Row, Col} from 'react-bootstrap';
import home from '../../Image/home.png'
import mail from '../../Image/mail.png'
import phone from '../../Image/phone.png'
import astronaut from '../../Image/astronaut.png'
import {useEffect, useRef} from 'react';
import program_window from '../../Image/Program_window.png'

const Contact = () => {
    const astronautRef = useRef();
    const progRef = useRef();
    const options = {threshold : 0.2};

    useEffect(() => {
        const observer = new IntersectionObserver((entry) => {
            const elem = entry[0];
            if(elem.isIntersecting){
                elem.target.style.opacity = 1;
                elem.target.style.margin = '-160px 0px 0px -80px';
                elem.target.style.width = '500px';
                elem.target.style.height = '500px';
            }else{
                elem.target.style.opacity = 0.5;
                elem.target.style.margin = '30px 0px 0px 100px';
                elem.target.style.width = '300px';
                elem.target.style.height = '300px';
            }
            return(() => {if(astronautRef.current){observer.unobserve(astronautRef.current);}});
        }, options)
        observer.observe(astronautRef.current);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entry) => {
            const elem = entry[0];
            if(elem.isIntersecting){
                elem.target.style.opacity = 1;
                elem.target.style.margin = '-470px 0px 0px 150px';
                elem.target.style.width = '130px';
                elem.target.style.height = '100px';
            }else{
                elem.target.style.opacity = 0.3;
                elem.target.style.margin = '-450px 0px 0px 300px';
                elem.target.style.width = '0px';
                elem.target.style.height = '0px';
            }
            return(() => {if(progRef.current){observer.unobserve(progRef.current);}});
        }, options)
        observer.observe(progRef.current);
    }, []);

    return(
        <section className='contact' id='Contact'>
            <div className="zig-zag-top">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"/>

            <Container className='contact_container'>
                <Row>
                    <Col md={4}>
                        <img src={astronaut} className='astronaut' ref={astronautRef}></img>
                        <img src={program_window} className='prog' ref={progRef}></img>
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