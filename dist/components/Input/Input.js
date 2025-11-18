var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import '../../style/input.css';
import InputWrapper from '../InputWrapper/InputWrapper';
const Input = (_a) => {
    var { value, id, color = 'primary', type = 'text', disabled = false, placeholder, shape = 'round', size = 'medium', icon, iconPosition = 'right', width = 'max-content', label, additionalClass, visibleLabel = true, onChange } = _a, props = __rest(_a, ["value", "id", "color", "type", "disabled", "placeholder", "shape", "size", "icon", "iconPosition", "width", "label", "additionalClass", "visibleLabel", "onChange"]);
    const reactId = React.useId();
    const inputId = id ? id : reactId;
    const handleInput = (e) => {
        const val = type === 'number' ? Number(e.target.value) : e.target.value;
        if (onChange)
            onChange(val);
    };
    return (_jsxs(InputWrapper, Object.assign({ label: label, size: size, id: inputId, shape: shape, additionalClass: additionalClass, visibleLabel: visibleLabel, disabled: disabled, element: "div", icon: icon, iconPosition: iconPosition, width: width }, { children: [_jsx("input", { type: type, id: inputId, value: value, disabled: disabled, placeholder: placeholder, "aria-disabled": disabled, "aria-label": !visibleLabel ? label : undefined, onChange: handleInput }), icon && icon] })));
};
export default Input;
