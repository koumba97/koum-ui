import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { fn } from 'storybook/test';
import RadioButton from './Radio';
import EarthSVG from '../../global/Earth';
import Radio from './Radio';
const meta = {
    title: 'Example/Radio',
    component: RadioButton,
    subcomponents: { EarthSVG },
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
    },
};
export const Checked = {
    args: {
        name: 'animal',
        label: 'Tiger 🐯',
        id: 'tiger-animal',
        checked: true,
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
        const [selectedValue, setSelectedValue] = useState(undefined);
        const handleChange = (value) => {
            setSelectedValue(value);
        };
        return (_jsxs("div", Object.assign({ className: "koum-component-wrapper" }, { children: [_jsxs("p", { children: ["Selected value: ", selectedValue] }), _jsxs("div", Object.assign({ className: "koum-group-radio" }, { children: [_jsx(Radio, { label: args.label, id: args.id, name: args.name, disabled: args.disabled, onChange: handleChange }), _jsx(Radio, { label: "Lion \uD83E\uDD81", id: "lion-animal", name: args.name, disabled: args.disabled, onChange: handleChange }), _jsx(Radio, { label: "Bear \uD83D\uDC3B", id: "bear-animal", name: args.name, disabled: args.disabled, onChange: handleChange })] }))] })));
    },
};
