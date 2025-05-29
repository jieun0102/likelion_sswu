import React from 'react';
import Sc1 from '../../assets/scss/img/sc1_1.png';
import Sc2 from '../../assets/scss/img/sc1_2.png';
import Sc3 from '../../assets/scss/img/sc1_3.png';
import Sc4 from '../../assets/scss/img/sc1_4.png';
import Sc5 from '../../assets/scss/img/sc1_5.png';
import Sc6 from '../../assets/scss/img/sc1_6.png';
import Sc7 from '../../assets/scss/img/sc1_7.png';
import Heart from '../../assets/scss/img/heart.png';

const Section01 = () => {
    return (
        <div className='section01_wrap'>
            <div className='title'>
                <h2>지금 많이 찾는 상품</h2>
            </div>
            <ul className='title_list'>
                <li>#냉감티셔츠</li>
                <li>#에샤페</li>
                <li>#반팔티셔츠</li>
                <li>#페이토&샌들</li>
                <li>#인터런</li>
            </ul>
            <ul className='img_list'>
                <li>
                    <img src={Sc1} alt="" />
                    <p className='style'>공용 컴포트핏 라이프스타일</p>
                    <p className='name'>{'<COLD WAVE>'} 그래픽 프린트 냉감 티셔츠</p>
                    <p className='price'>49,000원
                        <img className='heart_icon' src={Heart} alt="" />
                    </p>

                </li>
                <li>
                    <img src={Sc2} alt="" />
                    <p className='style'>공용 컴포트핏 라이프스타일</p>
                    <p className='name'>{'<COLD WAVE>'} 그래픽 프린트 냉감 티셔츠</p>
                    <p className='price'>49,000원
                        <img className='heart_icon' src={Heart} alt="" />
                    </p>
                    
                </li>
                <li>
                    <img src={Sc3} alt="" />
                    <p className='style'>공용 컴포트핏 라이프스타일</p>
                    <p className='name'>{'<COLD WAVE>'} 그래픽 프린트 냉감 티셔츠</p>
                    <p className='price'>49,000원
                        <img className='heart_icon' src={Heart} alt="" />
                    </p>
                </li>
                <li>
                    <img src={Sc4} alt="" />
                    <p className='style'>공용 컴포트핏 라이프스타일</p>
                    <p className='name'>{'<COLD WAVE>'} 그래픽 프린트 냉감 티셔츠</p>
                    <p className='price'>49,000원
                        <img className='heart_icon' src={Heart} alt="" />
                    </p>
                </li>
                <li>
                    <img src={Sc5} alt="" />
                    <p className='style'>공용 컴포트핏 라이프스타일</p>
                    <p className='name'>{'<COLD WAVE>'} 그래픽 프린트 냉감 티셔츠</p>
                    <p className='price'>49,000원
                        <img className='heart_icon' src={Heart} alt="" />
                    </p>
                </li>
                <li>
                    <img src={Sc6} alt="" />
                    <p className='style'>공용 컴포트핏 라이프스타일</p>
                    <p className='name'>{'<COLD WAVE>'} 그래픽 프린트 냉감 티셔츠</p>
                    <p className='price'>49,000원
                        <img className='heart_icon' src={Heart} alt="" />
                    </p>
                </li>
                <li>
                    <img src={Sc7} alt="" />
                    <p className='style'>공용 컴포트핏 라이프스타일</p>
                    <p className='name'>{'<COLD WAVE>'} 그래픽 프린트 냉감 티셔츠</p>
                    <p className='price'>49,000원
                        <img className='heart_icon' src={Heart} alt="" />
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Section01;