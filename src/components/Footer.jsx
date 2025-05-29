import React from 'react';
import Logo_footer from '../assets/scss/img/logo_black.png';
import Footer_info from '../assets/scss/img/footer.png'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Logo_footer'>
                <img className='logo' src={Logo_footer} alt="" />
            </div>
            <img className='info' src={Footer_info} alt="" />
        </div>
    );
};

export default Footer;