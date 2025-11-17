import { jsx as _jsx } from "react/jsx-runtime";
export default function ChevronSVG({ width, height, viewBox, color = 'black', }) {
    return (_jsx("svg", Object.assign({ width: width, height: height, viewBox: viewBox ? viewBox : `-1 -5 ${width} ${height}`, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: _jsx("path", { d: "M11 1.95555L6 6.95555L1 1.95555", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })));
}
