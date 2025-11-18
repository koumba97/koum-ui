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
import React, { useEffect, useRef, useState } from 'react';
import '../../style/select.css';
import InputWrapper from '../InputWrapper/InputWrapper';
import ChevronSVG from '../../global/Chevron';
import useClickOutside from '../../utils/useClickOutside';
const Select = (_a) => {
    var { value, id, type = 'text', disabled = false, placeholder = '', shape = 'round', icon, options, iconPosition = 'right', width = 'max-content', label, additionalClass, visibleLabel = true, onChange } = _a, props = __rest(_a, ["value", "id", "type", "disabled", "placeholder", "shape", "icon", "options", "iconPosition", "width", "label", "additionalClass", "visibleLabel", "onChange"]);
    const reactId = React.useId();
    const inputId = id ? id : reactId;
    const [visibleOptions, setVisibleOptions] = useState(false);
    const [selectedValue, setSelectValue] = useState(value);
    const ref = useClickOutside(() => setVisibleOptions(false));
    const selectPlaceholder = placeholder
        ? placeholder
        : label.charAt(0).toUpperCase() + label.slice(1);
    const selectRef = useRef(null);
    useEffect(() => {
        setVisibleOptions(false);
    }, [selectedValue]);
    const handleClick = () => {
        setVisibleOptions(true);
    };
    const handleSelect = (val) => {
        if (selectRef.current) {
            selectRef.current.value = String(val);
            selectRef.current.dispatchEvent(new Event('change', { bubbles: true }));
        }
        setSelectValue(val);
        onChange === null || onChange === void 0 ? void 0 : onChange(val);
    };
    return (_jsx("div", Object.assign({ className: `koum-select ${disabled ? 'disabled' : ''}`, ref: ref }, { children: _jsxs(InputWrapper, Object.assign({ label: label, size: "medium", id: inputId, width: width, shape: shape, additionalClass: additionalClass, visibleLabel: visibleLabel, disabled: disabled, element: "button", onClick: handleClick }, { children: [_jsx("select", Object.assign({ ref: selectRef, className: "native-select", defaultValue: value === null || value === void 0 ? void 0 : value.value, disabled: disabled, "aria-disabled": disabled, "aria-label": !visibleLabel ? label : undefined, onChange: (e) => onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value) }, { children: options.map((opt) => (_jsx("option", Object.assign({ value: opt.value }, { children: opt.label }), opt.value))) })), icon && icon, selectedValue ? (selectedValue.label) : (_jsx("span", Object.assign({ className: "placeholder" }, { children: selectPlaceholder }))), _jsx("span", Object.assign({ className: `chevron ${visibleOptions ? 'open' : ''}` }, { children: _jsx(ChevronSVG, { width: 15, height: 17, color: "#7f8898" }) })), visibleOptions && (_jsx("div", Object.assign({ className: "select-options", role: "listbox" }, { children: options.map((opt) => (_jsx("div", Object.assign({ role: "option", tabIndex: 0, className: `select-option ${opt.value === (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.value) ? 'selected' : ''}`, onClick: () => handleSelect(opt) }, { children: _jsx("div", Object.assign({ className: "option-content" }, { children: _jsx("span", { children: opt.label }) })) }), opt.value))) })))] })) })));
};
export default Select;
