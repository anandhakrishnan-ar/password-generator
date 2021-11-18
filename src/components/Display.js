import React from 'react'

const Display = () => {
    return (
        <>
            <span>This is a password generator app</span>
            <div className="card row">
                <div className="card-body red-bg">
                    <div className="row">
                        <div className="col-md-6">
                            <span className="password-display-text">23567567*$#@#@e3we3#$#</span>
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
        </>
    )
}

export default Display
