import React from "react";

const Input = props => {
    const {
        onChange,
        name,
        value
    } = props;

    const onChangeInput = e => {
        const value = e.target.value;
        onChange(value, name, e);
    }

    return <input name={name} value={value || ''} onChange={onChangeInput}/>
}

export default Input;