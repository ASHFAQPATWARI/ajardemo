import * as React from 'react';
import PropTypes from 'prop-types';

/* Stateless functional component to render input fields */
const Input = (props) => {
    const { label, name, value, placeholder, handleChange, type, required } = props;
    return (
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">{label}</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        <input
                            className="input"
                            name={name}
                            type={type}
                            value={value}
                            onChange={handleChange}
                            placeholder={placeholder}
                            required={required}
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'email']),
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    required: PropTypes.bool
}

Input.defaultProps = {
    type: 'text',
    required: false
}

export default Input;