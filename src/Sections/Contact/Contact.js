import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {styled} from '@mui/material/styles';
import {TextField, FormControl} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';
import contact_us from '../../Image/contact_us.png'
import laptop from '../../Image/laptop_frame.png'

const DecoTextField = styled((props) => (
    <TextField InputProps={{disableUnderline: true}} {...props}/>
    ))(({theme}) => ({
    '& .MuiFilledInput-root': {
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
        ]),
        '&.Mui-focused': {
            backgroundColor: 'transparent',
        }
    },
}));

const Contact = () => {
    const [chk_name, setChk_name] = useState('');
    const [chk_email, setChk_email] = useState('');
    const [chk_phone, setChk_phone] = useState('');

    const onChange_name = (e) => {setChk_name(e.target.value);}
    const onChange_email = (e) => {setChk_email(e.target.value);}
    const onChange_phone = (e) => {setChk_phone(e.target.value);}

    const vali_name = () =>{
        let check = /[~!@#$%^&*()_+={}|;:'",.<>?/0-9]/;
        return check.test(chk_name);
    }

    return(
        <section className='contact' id='Contact'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path className='contact_fill' fill="#FFB400" fill-opacity="1" d="M0,224L30,218.7C60,213,120,203,180,218.7C240,235,300,277,
                    360,282.7C420,288,480,256,540,234.7C600,213,660,203,720,202.7C780,203,840,213,900,229.3C960,245,1020,
                    267,1080,272C1140,277,1200,267,1260,256C1320,245,1380,235,1410,229.3L1440,224L1440,320L1410,320C1380,
                    320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,
                    320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
            </div>
            <div className='contact_main'>
                <Container className='contact_container' img={laptop}>
                    <Row>
                        <Col md={7} className='contact_col'>
                            <div className='Contact_main'>CONTACT</div>
                            <span className='Contact_comment'>
                                <div>여러분들의 생각을 공유해주세요.</div>
                            </span>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': {mr: 1, my: 1, width: 550, maxWidth: '100%'}
                                }}
                                >
                                <form className='contact_form' action="https://formsubmit.co/2676625dd12c557c19842dd77887a93a" method="POST">
                                    <FormControl component="fieldset">
                                        <DecoTextField
                                            label="Full Name"
                                            variant="filled"
                                            value={chk_name}
                                            onChange={onChange_name}
                                            error={vali_name()}
                                            helperText={vali_name() ? "특수기호나 숫자는 입력하실 수 없습니다." : ""}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <AccountCircle/>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            required
                                        />
                                        <DecoTextField
                                            label="Email"
                                            variant="filled"
                                            value={chk_email}
                                            onChange={onChange_email}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <AlternateEmailIcon/>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            required
                                        />
                                        <DecoTextField
                                            label="Phone number"
                                            variant="filled"
                                            value={chk_phone}
                                            onChange={onChange_phone}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <CallIcon/>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <DecoTextField
                                            label="Message"
                                            rows={10}
                                            variant="filled"
                                            multiline
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <ChatIcon/>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            required
                                        />
                                        <button type='submit'>Send</button>
                                    </FormControl>
                                </form>
                            </Box>
                        </Col>
                        <Col md={5}>
                            <img className='contact_img' src={contact_us}></img>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path className='contact_fill' fill="#3C467D" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,181.3C480,171,600,117,720,106.7C840,
                    96,960,128,1080,149.3C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,
                    0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>c
                </svg>
            </div>
        </section>
    )
}

export default Contact;