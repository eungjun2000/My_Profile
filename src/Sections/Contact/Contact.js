import astronaut from '../../Image/astronaut.png'
import program_window from '../../Image/Program_window.png'
import ParticlesStar from '../../ParticlesStar';
import {Container, Row, Col} from 'react-bootstrap';
import {useEffect, useRef} from 'react';
import {IconButton} from '@mui/material'
import {HouseRounded, AttachEmail, Call} from '@mui/icons-material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

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

    const theme = createTheme({
        palette: {
            white_color: {
                main: '#fff'
            }
        },
    })

    const handleCopyClipBoard = async(text) => {
        try{
            await navigator.clipboard.writeText(text);
            alert('클립보드에 복사되었습니다.')
        }catch(e){
            alert('Copy failed');
        }
    };

    return(
        <section className='contact' id='Contact'>
            <div className="zig-zag-top">
            <ParticlesStar/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"/>
            <Container className='contact_container'>
                <Row>
                    <Col md={4} className='contact_col'>
                        <img src={astronaut} className='astronaut' ref={astronautRef}></img>
                        <img src={program_window} className='prog' ref={progRef}></img>
                    </Col>
                    <Col md={4} className='contact_col'>
                        <div style={{fontSize: '20px', paddingTop: '15px', paddingLeft: '6px', color: '#66CDAA'}}>Address</div><br/>
                        <div style={{marginLeft: '-5px'}}>
                            <ThemeProvider theme={theme}>
                                <div>
                                    <IconButton color='white_color'>
                                        <HouseRounded fontSize='large'/>
                                    </IconButton>
                                    &nbsp; Home &nbsp; South Korea, Suwon
                                </div><br/>
                                <div>
                                    <IconButton color='white_color' onClick={() => {handleCopyClipBoard('eungjun2000@gmail.com')}}>
                                        <AttachEmail fontSize='large'/>
                                    </IconButton>
                                    &nbsp; Mail &nbsp; eungjun2000@gmail.com
                                </div><br/>
                                <div>
                                    <IconButton color='white_color' onClick={() => {handleCopyClipBoard('010 8426 4424')}}>
                                        <Call fontSize='large'/>
                                    </IconButton>
                                    &nbsp; Phone &nbsp; +82 10 8426 4424
                                </div>
                            </ThemeProvider>
                        </div>
                        <hr/>
                        <div style={{fontSize: '20px', color: '#66CDAA'}}>Follow</div><br/>
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
                    <Col md={4} className='contact_col'>
                        <form className='contact_form' action="https://formsubmit.co/2676625dd12c557c19842dd77887a93a" method="POST">
                            <div style={{fontSize: '30px', color: '#66CDAA'}}>Contact me</div>
                            <input type="text" id="name" placeholder='Input your name' required></input>
                            <input type="email" id="email" placeholder='Input your email' required></input>
                            <textarea id="message" rows="5"></textarea>
                            <button type='submit'>Send</button>
                        </form>
                    </Col>
                    <hr/>
                    <div style={{textAlign: 'center', fontSize: '15px', padding: '10px 0px 10px 0px', zIndex: '1'}}>ⓒ 2022 All right reserved</div>
                </Row>
            </Container>
            </div>
        </section>
    )
}

export default Contact;