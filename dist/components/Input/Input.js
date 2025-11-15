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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import '../../style/input.css';
const Input = (_a) => {
    var { value, id, color = 'primary', type = 'text', disabled = false, placeholder, shape = 'round', size = 'medium', icon, iconPosition = 'right', label, additionalClass, visibleLabel = true, onChange } = _a, props = __rest(_a, ["value", "id", "color", "type", "disabled", "placeholder", "shape", "size", "icon", "iconPosition", "label", "additionalClass", "visibleLabel", "onChange"]);
    const reactId = React.useId();
    const inputId = id ? id : reactId;
    const inputShape = shape === 'round' && 'round';
    const iconInput = !visibleLabel && icon && 'icon-input';
    return (_jsxs("div", Object.assign({ className: "koum-input-wrapper" }, { children: [visibleLabel ? _jsxs("label", Object.assign({ htmlFor: inputId }, { children: [label, " "] })) : null, _jsxs("div", Object.assign({ className: [
                    'koum-input',
                    size,
                    color,
                    inputShape,
                    iconInput,
                    additionalClass,
                    icon && 'icon',
                ].join(' '), style: {
                    flexDirection: icon && iconPosition === 'left' ? 'row-reverse' : 'row',
                } }, { children: [_jsx("input", { type: type, id: inputId, value: value, disabled: disabled, placeholder: placeholder, "aria-disabled": disabled, "aria-label": !visibleLabel ? label : undefined, onChange: onChange }), icon && icon] }))] })));
};
export default Input;
