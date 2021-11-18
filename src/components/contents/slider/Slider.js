import React from 'react'
import PropTypes from 'prop-types'
import './Slider.css'
const Slider = props => {
    const { minValue, maxValue, value,changeRange } = props;
    return (
        <>
            <span className="font-weight-bold">Length : {value}</span>
            <input className="range-input" type="range" min={minValue} max={maxValue} value={value} title={value} onChange={changeRange} />            
        </>
    )
}

Slider.propTypes = {
minValue:PropTypes.string,
maxValue:PropTypes.string,
value:PropTypes.string,
changeRange:PropTypes.func
}

export default Slider
