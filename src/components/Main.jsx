import React from 'react';
import Section01 from './Main_section/Section01';
import Section02 from './Main_section/Section02';
import Section03 from './Main_section/Section03';

const Main = () => {
    return (
        <div className='main_wrap'>
            <Section01></Section01>
            <Section02></Section02>
            <Section03></Section03>
        </div>
    );
};

export default Main;