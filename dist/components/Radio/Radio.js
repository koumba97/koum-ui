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
import '../../style/radio.css';
const Radio = (_a) => {
    var { disabled = false, label, name, id, visibleLabel = true, checked, onChange } = _a, props = __rest(_a, ["disabled", "label", "name", "id", "visibleLabel", "checked", "onChange"]);
    return (_jsxs("div", Object.assign({ className: "koum-radio" }, { children: [_jsx("input", { type: "radio", "aria-label": !visibleLabel ? label : undefined, name: name, id: id, checked: checked, disabled: disabled, onChange: () => onChange && onChange(id) }), visibleLabel ? _jsx("label", Object.assign({ htmlFor: id }, { children: label })) : null] })));
};
export default Radio;
