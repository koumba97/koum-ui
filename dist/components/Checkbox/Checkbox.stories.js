import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { fn } from 'storybook/test';
import Checkbox from './Checkbox';
const meta = {
    title: 'Example/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onChange: fn() },
};
export default meta;
export const Default = {
    args: {
        name: 'animal',
        label: 'Tiger 🐯',
        id: 'tiger-animal',
        disabled: false,
    },
    render: (args) => {
        const [selectedValues, setSelectedValues] = useState([]);
        const handleChange = (value, checked) => {
            if (checked && !(selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.includes(value))) {
                setSelectedValues([...selectedValues, value]);
            }
            else if (!checked && (selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.includes(value))) {
                const updatedSelectedValues = selectedValues.filter((selectValue) => selectValue !== value);
                setSelectedValues(updatedSelectedValues);
            }
        };
        return (_jsx(Checkbox, { label: args.label, id: args.id, name: args.name, disabled: args.disabled, checked: selectedValues.includes(args.id), onChange: handleChange }));
    },
};
export const Disabled = {
    args: {
        name: 'animal',
        label: 'Tiger 🐯',
        id: 'tiger-animal',
        disabled: true,
    },
};
export const DisabledChecked = {
    args: {
        name: 'animal',
        label: 'Tiger 🐯',
        id: 'tiger-animal',
        disabled: true,
        checked: true,
    },
};
export const MultipleRadio = {
    args: {
        name: 'animal',
        label: 'Tiger 🐯',
        id: 'tiger-animal',
        disabled: false,
    },
    render: (args) => {
        const [selectedValues, setSelectedValues] = useState([]);
        const handleChange = (value, checked) => {
            if (checked && !(selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.includes(value))) {
                setSelectedValues([...selectedValues, value]);
            }
            else if (!checked && (selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.includes(value))) {
                const updatedSelectedValues = selectedValues.filter((selectValue) => selectValue !== value);
                setSelectedValues(updatedSelectedValues);
            }
        };
        return (_jsxs("div", Object.assign({ className: "koum-component-wrapper" }, { children: [_jsxs("p", { children: ["Selected value: ", selectedValues.join(', ')] }), _jsxs("div", Object.assign({ className: "koum-group-checkbox" }, { children: [_jsx(Checkbox, { label: args.label, id: args.id, name: args.name, disabled: args.disabled, checked: selectedValues.includes(args.id), onChange: handleChange }), _jsx(Checkbox, { label: "Lion \uD83E\uDD81", id: "lion-animal", name: args.name, disabled: args.disabled, checked: selectedValues.includes('lion-animal'), onChange: handleChange }), _jsx(Checkbox, { label: "Bear \uD83D\uDC3B", id: "bear-animal", name: args.name, disabled: args.disabled, checked: selectedValues.includes('bear-animal'), onChange: handleChange })] }))] })));
    },
};
