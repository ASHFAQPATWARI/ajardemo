import * as React from 'react';

/* Stateless component to render input fields */
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

export default Input;