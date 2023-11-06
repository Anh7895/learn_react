import React from 'react';
import '../styles/splash.css'
import { Button } from 'antd';

function Splash() {
    return (
        <div className='splashBg'>
            <div className='header'>
                <Button href='/login' className='btLogin'>Login</Button>
            </div>
        </div>
    );
}

export default Splash;