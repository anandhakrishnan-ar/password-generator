import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.css'
const Checkbox = props => {
    const{name,checked,label,onChange}=props
    return (
        <>       
        <span className="checkbox-value-wrapper">
        <input type="checkbox" className="checkbox-value" name={name} checked={checked} onChange={onChange}/>
        &nbsp;
            <label>{label}</label>
            </span>     
            
        </>
    )
}

Checkbox.propTypes = {
name:PropTypes.string,
checked:PropTypes.bool,
label:PropTypes.string,
onChange:PropTypes.func
}

export default Checkbox
