import React, {useState} from 'react';
import arrowDown from '../../images/svg/arrow-down-grey.svg';
import setting from '../../images/svg/setting.svg';
import './main-content.css';
import selArrow from '../../images/svg/selArrow.svg'

const MainContent = ({setActive, setActive2}) => {
    const [coin1, setCoin1] = useState(0)
    const SelectModal = () => {
        setActive(true);
    };
    const ConnectModal = () => {
        setActive2(true);
    };
    const conwertWallet = (e) => {
        setCoin1(e.target.value)
    }
    return (
        <div className='content'>
            <div className='main_content'>
                <div className='header'>
                    <h4>Swap</h4>
                    <div className='setting'>
                        <b>Settings</b>
                        <img width='20px' height='20px' src={setting} alt=''/>
                    </div>
                </div>
                <div className='crypto'>
                    <button onClick={() => SelectModal()}>
                        <img
                            src=""
                            alt=""
                        />
                        <option value="0">
                            WETH
                        </option>
                        <img
                            width='15px'
                            height='9px'
                            src={selArrow}
                            alt=""
                        />
                    </button>
                    <div className="inp-span">
                        <input
                            onChange={(e) => conwertWallet(e)}
                            type='number'
                            placeholder='0.0'
                            inputMode='decimal'
                            autoComplete='off'
                            pattern='^[0-9]*[.,]?[0-9]*$'
                            minlength='1'
                            maxLength='79'
                        />
                        <span>=${coin1 * 2520}</span>
                    </div>
                </div>
                <div className='down'>
                    <b>
                        <img
                            width='30px'
                            height='20px'
                            src={arrowDown}
                            alt=''
                        />
                    </b>
                </div>
                <div className='select'>
                    <button onClick={() => SelectModal()}>
                        <option value="">
                            Select a token
                        </option>
                        <img
                            width='15px'
                            height='9px'
                            src={selArrow}
                            alt=""
                        />
                    </button>
                    <input
                        className='second-input'
                        inputMode='decimal'
                        autoComplete='off'
                        pattern='^[0-9]*[.,]?[0-9]*$'
                        type='number'
                        placeholder='0.0'
                        minlength='1'
                        maxLength='79'
                    />
                </div>
                <div className='connect'>
                    <button onClick={ConnectModal}>Connect Wallet</button>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
