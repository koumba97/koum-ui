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
import '../../style/input-wrapper.css';
const InputWrapper = (_a) => {
    var { value, id, type = 'text', disabled = false, shape = 'round', size = 'medium', width = '100%', icon, iconPosition = 'right', label, additionalClass, visibleLabel = true, element = 'div', children, onChange, onClick } = _a, props = __rest(_a, ["value", "id", "type", "disabled", "shape", "size", "width", "icon", "iconPosition", "label", "additionalClass", "visibleLabel", "element", "children", "onChange", "onClick"]);
    const reactId = React.useId();
    const inputId = id ? id : reactId;
    const inputShape = shape === 'round' && 'round';
    const iconInput = !visibleLabel && icon && 'icon-input';
    return (_jsxs("div", Object.assign({ className: `koum-input-wrapper ${additionalClass}` }, { children: [visibleLabel ? _jsxs("label", Object.assign({ htmlFor: inputId }, { children: [label, " "] })) : null, element === 'div' ? (_jsx("div", Object.assign({ className: [
                    'koum-input',
                    size,
                    inputShape,
                    iconInput,
                    ,
                    icon && 'icon',
                ].join(' '), style: {
                    flexDirection: icon && iconPosition === 'left'
                        ? 'row-reverse'
                        : 'row',
                    width: width,
                } }, { children: children }))) : (_jsx("button", Object.assign({ onClick: onClick, disabled: disabled, className: [
                    'koum-input',
                    (size = 'medium'),
                    inputShape,
                    iconInput,
                    additionalClass,
                    disabled && 'disabled',
                    icon && 'icon',
                ].join(' '), style: {
                    flexDirection: icon && iconPosition === 'left'
                        ? 'row-reverse'
                        : 'row',
                    width: width,
                } }, { children: children })))] })));
};
export default InputWrapper;
