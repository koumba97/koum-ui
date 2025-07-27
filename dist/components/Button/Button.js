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
import '../../style/button.css';
const Button = (_a) => {
    var { children, color = 'primary', disabled = false, shape = 'round', size = 'medium', style = 'filled', icon, label, visibleLabel = true, onClick } = _a, props = __rest(_a, ["children", "color", "disabled", "shape", "size", "style", "icon", "label", "visibleLabel", "onClick"]);
    const buttonStyle = style === 'outlined' ? 'outlined' : null;
    const buttonShape = shape === 'square' ? 'square' : null;
    const iconButton = !visibleLabel && icon ? 'icon-button' : null;
    return (_jsx("button", Object.assign({ type: "button", className: [
            'koum-button',
            size,
            color,
            buttonStyle,
            buttonShape,
            iconButton,
        ].join(' '), "aria-label": label, disabled: disabled, "aria-disabled": disabled, onClick: onClick }, { children: _jsxs("label", { children: [icon && _jsx("span", Object.assign({ className: "icon" }, { children: icon })), visibleLabel ? label : null] }) })));
};
export default Button;
