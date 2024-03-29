import astronaut from '../Image/astronaut.png'
import program_window from '../Image/Program_window.png'
import ParticlesStar from '../ParticlesStar';
import {Container, Row, Col} from 'react-bootstrap';
import {useState, useEffect, useRef} from 'react';
import {IconButton, Tooltip} from '@mui/material'
import {HouseRounded, AttachEmail, Call} from '@mui/icons-material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Logo_Anim from '../Animation/Logo_Anim.json'
import Lottie from 'lottie-react';

function SlideSnackbar(props) {
    return <Slide {...props} direction="up" />;
}

const Footer = () => {
    const astronautRef = useRef();
    const progRef = useRef();
    const options = {threshold : 0.2};

    useEffect(() => {
        const observer = new IntersectionObserver((entry) => {
            const elem = entry[0];
            if(elem.isIntersecting){
                elem.target.style.opacity = 1;
                elem.target.style.margin = '-175px 0px 0px -40px';
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
                elem.target.style.margin = '-470px 0px 0px 190px';
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

    const [state, setState] = useState({
        open: false,
        Transition: Slide,
    });

    const handleCopyClipBoard = async(text) => {
        try{
            await navigator.clipboard.writeText(text);
        }catch(e){
            alert('Copy failed');
        }
    };

    const handleClick = (Transition) => () => {
        setState({
            open: true,
            Transition,
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        ><CloseIcon fontSize="small" />
        </IconButton>
    )

    return(
        <footer className='footer'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"/>
            <div>
                <Snackbar
                    open={state.open}
                    onClose={handleClose}
                    autoHideDuration={1300}
                    TransitionComponent={state.Transition}
                    message="클립보드에 복사되었습니다."
                    action={action}
                    key={state.Transition.name}
                />
            </div>
            <div className="footer_top">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
                <ParticlesStar/>
                <Container className='footer_container'>
                    <Row>
                        <Col md={4} className='footer_col fc1'>
                            <div className='logo_row'>
                                <Lottie
                                    animationData={Logo_Anim}
                                    loop={false}
                                    autoplay={true}
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                    }}
                                />
                                <span className='logo'>Portfolio.</span>
                            </div>
                            This is a Portfolio Website for introducing myself.<br/><hr/>
                            <div style={{fontSize: '20px', color: '#66CDAA'}}>Menu</div><br/>
                            <div style={{color: 'white'}}>
                                <div className='menu_txt'>Home</div>
                                <div className='menu_txt'>About</div>
                                <div className='menu_txt'>Skills</div>
                                <div className='menu_txt'>Works</div>
                                <div className='menu_txt'>Contact</div>
                            </div>
                        </Col>
                        <Col md={4} className='footer_col fc2'>
                            <div style={{fontSize: '20px', paddingLeft: '5px', color: '#66CDAA'}}>Address</div><br/>
                            <div style={{marginTop: '-10px', marginLeft: '-5px'}}>
                                <ThemeProvider theme={theme}>
                                    <div>
                                        <IconButton color='white_color'>
                                            <HouseRounded fontSize='large'/>
                                        </IconButton>
                                        &nbsp; Home &nbsp; South Korea, Suwon
                                    </div>
                                    <div>
                                        <Tooltip title='copy' placement='left' arrow>
                                            <span onClick={handleClick(SlideSnackbar)}>
                                                <IconButton color='white_color' onClick={() => {handleCopyClipBoard('eungjun2000@gmail.com')}}>
                                                    <AttachEmail fontSize='large'/>
                                                </IconButton>
                                            </span>
                                        </Tooltip>
                                        &nbsp; Mail &nbsp; eungjun2000@gmail.com
                                    </div>
                                    <div>
                                        <Tooltip title='copy' placement='left' arrow>
                                            <span onClick={handleClick(SlideSnackbar)}>
                                                <IconButton color='white_color' onClick={() => {handleCopyClipBoard('010 8426 4424')}}>
                                                    <Call fontSize='large'/>
                                                </IconButton>
                                            </span>
                                        </Tooltip>
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
                        <Col md={3} className='footer_col'>
                            <img src={astronaut} className='astronaut' ref={astronautRef}></img>
                            <img src={program_window} className='prog' ref={progRef}></img>
                        </Col>
                        <hr/>
                        <div style={{textAlign: 'center', fontSize: '15px', padding: '10px 0px 22px 0px', zIndex: '1'}}>ⓒ 2022 All right reserved</div>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;