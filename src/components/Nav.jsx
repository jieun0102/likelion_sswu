import React from 'react';
import Logo from '../assets/scss/img/logo.svg'
import Map from '../assets/scss/img/map.svg'
import Find from '../assets/scss/img/find.svg'
import My from '../assets/scss/img/home.svg'
import Add from '../assets/scss/img/add.svg'

const Nav = () => {
    return (
        <div className='Nav_wrap'>
            <img className='logo' src={Logo} alt="로고" />
            <ul className='middle'>
                <li>WOMEN </li>
                <li>MEN </li>
                <li>KIDS </li>
                <li>| </li>
                <li>TENNIS </li>
                <li>BRAND </li>
            </ul>
            <div className='right'>
                <img src={Map} alt="" />
                <img src={Find} alt="" />
                <img src={My} alt="" />
                <img src={Add} alt="" />
            </div>
        </div>
    );
};

export default Nav;