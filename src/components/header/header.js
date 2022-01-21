import React from 'react';
import etherLogo from '../../images/cow-swap/ethereum-logo.png';
import cowLogoDark from '../../images/svg/cow-logo-dark.svg';
import feedback from '../../images/svg/feedback.svg';
import twitter from '../../images/svg/twitter.svg';
import menuMore from '../../images/svg/menu.svg';
import arrowDown from '../../images/svg/arrow-down-icon.svg';
import './index.css';
import Footer from '../footer/footer';

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='nav'>
                    <ul>
                        <li>
                            <a href='#!'>
                                <img
                                    width='190px'
                                    height='48px'
                                    src={cowLogoDark}
                                    alt=''
                                />
                            </a>
                        </li>
                        <li>
                            <a href='#!'>
                                <b>Swap</b>
                            </a>
                        </li>
                        <li>
                            <a href='#!'>
                                <b>Profile</b>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='header-btn-group'>
                    <div className='btn-bitcoin'>
                        <div>
                            <div className='ether'>
                                <img
                                    width='20px'
                                    height='20px'
                                    src={etherLogo}
                                    alt=''
                                />
                                <p>Ethereum</p>
                                <img
                                    width='24px'
                                    height='12px'
                                    src={arrowDown}
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='connect-btn-wrap'>
                                <p className='connect-btn'>Connect to wallet</p>
                            </div>
                        </div>
                    </div>
                    <div className='btns-end'>
                        <button>
                            <a href='#!' className='twitter-btn'>
                                <img
                                    width='22px'
                                    height='22px'
                                    src={twitter}
                                    alt=''
                                />
                            </a>
                        </button>
                        <button>
                            <a href='#!'>
                                <img
                                    className='twitter-hower'
                                    width='22px'
                                    height='22px'
                                    src={twitter}
                                    alt=''
                                />
                            </a>
                        </button>
                    </div>
                    <div>
                        <button>
                            <a href='#!'>
                                <img
                                    className='more'
                                    width='22px'
                                    height='22px'
                                    src={menuMore}
                                    alt=''
                                />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className='wrap-footer'>
                <Footer />
            </div>
        </>
    );
};

export default Header;
