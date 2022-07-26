import './Change.css'
import React from 'react';


const Change = ({changeSign}) => {


    const signName = (e) => {
        let signon = e.target.src.split('/')[6].split('.')[0];
        document.getElementById('cur_sign').textContent = signon.charAt(0).toUpperCase() + signon.slice(1);
    }

    const clear = () => {
        document.getElementById('cur_sign').textContent=""
    }

    const change = (e) => {
        let signon = e.target.src.split('/')[6].split('.')[0];
        changeSign(signon);
    }
    return (
        <div className="card2">
            <div className="title"><p>Choose Your Sign</p></div>
            <div className="flex" id="first">
                <img className="sign" src={require('../../icons/aquarius 2.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
                <img className="sign" src={require('../../icons/aries 2.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
                <img className="sign" src={require('../../icons/cancer 2.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
                <img className="sign" src={require('../../icons/capricorn 2.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
                <img className="sign" src={require('../../icons/gemini 2.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
                <img className="sign" src={require('../../icons/leo 2.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            </div>
            <div id="cur_sign"></div>
            <div className="flex" id="second">
                <img className="sign" src={require('../../icons/libra 2.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
                <img className="sign" src={require('../../icons/pisces 2.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
                <img className="sign" src={require('../../icons/sagittarius 2.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
                <img className="sign" src={require('../../icons/scorpio 2.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
                <img className="sign" src={require('../../icons/taurus 2.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
                <img className="sign" src={require('../../icons/virgo 2.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            </div>
            <div></div>
        </div>
        )
    }
    
    
    export default Change;