import React from 'react';
import Sub1_img from '../../assets/scss/img/sc2_1.png';
import Sub2_img from '../../assets/scss/img/sc2_2.png';


const Section02 = () => {
    return (
        <div className='section02_wrap'>
            <div className='sc2_title'>
                <p className='title_1'>기획전</p>
            </div>
            <div className='sub_wrap'>
                <div className='sub1'>
                    <img src={Sub1_img} alt="" />
                    <p className='sub_title'>FILA CUSTOM STUDIO</p>
                    <button>자세히보기</button>
                </div>
                <div className='sub2'>
                    <img src={Sub2_img} alt="" />
                    <p className='sub_title'>Pertex Life</p>
                    <button>자세히보기</button>
                </div>
            </div>
            
        </div>
    );
};

export default Section02;