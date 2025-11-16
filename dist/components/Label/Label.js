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
import '../../style/label.css';
import CloseSVG from '../../global/Close';
const Label = (_a) => {
    var { label, action = 'none', checkLabel = `select ${label}`, color = 'primary', deleteLabel = `delete ${label}`, additionalClass, icon, id = label, isChecked, onCheck, onDelete, shape = 'round', size = 'medium' } = _a, props = __rest(_a, ["label", "action", "checkLabel", "color", "deleteLabel", "additionalClass", "icon", "id", "isChecked", "onCheck", "onDelete", "shape", "size"]);
    const labelShape = shape === 'square' ? 'square' : null;
    const labelAction = action !== 'none' ? action : null;
    return (_jsxs("div", Object.assign({ className: [
            'koum-label',
            size,
            color,
            additionalClass,
            labelShape,
            labelAction,
        ].join(' ') }, { children: [_jsxs("span", { children: [icon && _jsx("span", Object.assign({ className: "icon" }, { children: icon })), label] }), action === 'delete' ? (_jsx("button", Object.assign({ "aria-label": deleteLabel, className: "delete-label", onClick: onDelete }, { children: _jsx(CloseSVG, { width: 10, height: 10, viewBox: "8 5 120 120" }) }))) : action === 'check' ? (_jsx("input", { id: id, type: "checkbox", checked: isChecked, onChange: onCheck, "aria-label": checkLabel })) : null] })));
};
export default Label;
