import React from "react";

const Select = props => {
    const {
        onChange,
        name,
        value,
        options = []
    } = props;

    const onChangeInput = e => {
        const value = e.target.value;
        onChange(value, name, e);
    }

    return <select name={name} value={value || ''} onChange={onChangeInput}>
        {
            (options || []).map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)
        }
    </select>
}

export default Select;