import React,{useState} from 'react'
import Slider from './contents/slider/Slider'
import randomstring from 'randomstring'
const Display = () => {
    const lengthChange=e=>{
        lengthUpdate(e.target.value);
        changePassword(randomstring.generate(parseInt(e.target.value)));
        if(parseInt(e.target.value)>5){
            setStrengthClass('green-bg');
            setStrength('Strong');
        }
        else{
            setStrengthClass('red-bg');
            setStrength('Weak');
        }
    }
    const [password,changePassword]=useState(randomstring.generate(5))
    const [length,lengthUpdate]=useState("5");
    const [passwordStrengthClass,setStrengthClass]=useState('red-bg'); 
    const [passwordStrength,setStrength]=useState('Weak'); 
    return (
        <>
            <span>This is a password generator app</span>
            <div className="row main-wrapper">
                <div className="card col-md-12">
                    <div className={passwordStrengthClass}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="password-display-text">{password}</span>
                            </div>
                            <div className="col-md-3 password-actions">
                                <span>
                                    <button className="copy-btn"><i className="fa fa-clone"></i></button>
                                    <button className="copy-btn"><i className="fa fa-undo"></i></button>
                                </span>
                            </div>
                        </div>
                        <div className="password-description col-md-6">
                            <span>Password Strength: {passwordStrength}</span>
                        </div>
                    </div>
                    </div>
                    

                </div>
                <div className="card col-md-12">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                               <Slider minValue="3" maxValue="30" value={length} changeRange={lengthChange}/>
                            </div>
                            <div className="col-md-3 password-actions">
                                <span>
                                    <button className="copy-btn"><i className="fa fa-clone"></i></button>
                                    <button className="copy-btn"><i className="fa fa-undo"></i></button>
                                </span>
                            </div>
                        </div>
                        <div className="password-description col-md-6">
                            <span>Password Strength: Good</span>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Display
