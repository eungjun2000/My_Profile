import React from 'react';
import { Spin as Hamburger } from 'hamburger-react'

const Hamburger_menu = () => {
    return (
        <div className={'hamburger_menu'}>
            <Hamburger className='hamburger_menu' toggled={toggle} toggle={setToggle}/>
        </div>
    );  
}

export default Hamburger_menu;