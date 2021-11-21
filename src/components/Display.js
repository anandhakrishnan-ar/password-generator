import React, { useState } from 'react'
import Slider from './contents/slider/Slider'
import Checkbox from './contents/checkbox/Checkbox'
import randomstring from 'randomstring'
const Display = () => {
    const CHECKBOX_LIST = [
        {
            id: 0,
            label: 'Numeric',
            name: 'numbers',
            isChecked: true,
            isDisabled: true
        },
        {
            id: 1,
            label: 'Uppercase',
            name: 'uppercase',
            isChecked: true,
            isDisabled: true
        },
        {
            id: 2,
            label: 'Lowercase',
            name: 'lowercase',
            isChecked: true,
            isDisabled: true
        },
        {
            id: 3,
            label: 'Symbols',
            name: 'symbols',
            isChecked: true,
            isDisabled: true
        },
    ];
    let [checkbox, setCheckbox] = useState({
        numbers: true,
        uppercase: true,
        lowercase: true,
        symbols: true,
    })
    const lengthChange = e => {
        const lengthValue = parseInt(e.target.value)
        lengthUpdate(e.target.value);
        changePassword(randomstring.generate(lengthValue));
        if (lengthValue > 4) {
            setStrengthClass('green-bg');
            lengthValue > 10 ? setStrength('Strong') : setStrength('Good');
        }
        else {
            setStrengthClass('red-bg');
            setStrength('Weak');
        }
    }
    const checkboxChange = e => {
        let { name, checked } = e.target;
        CHECKBOX_LIST.map(checkbox => {
            if (checkbox.name === name) {
                checkbox.isChecked = checked;
                setCheckbox(prevState=>({...prevState, [name]: checkbox.isChecked }));
            }            
            return '';
        })
        console.log(checkbox);
        console.log(CHECKBOX_LIST);
    }
    const [password, changePassword] = useState(randomstring.generate(4))
    const [length, lengthUpdate] = useState("4");
    const [passwordStrengthClass, setStrengthClass] = useState('red-bg');
    const [passwordStrength, setStrength] = useState('Weak');
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
                                <div className="col-md-6 password-actions">
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
                            <div className="col-md-6">
                                <Slider minValue="3" maxValue="30" value={length} changeRange={lengthChange} />
                            </div>
                        </div>
                        <div className="password-checkbox col-md-12">
                            {
                                CHECKBOX_LIST.map(checkbox => (
                                    < Checkbox key={checkbox.id} name={checkbox.name} checked={checkbox.isChecked} label={checkbox.label} onChange={checkboxChange} />
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Display
