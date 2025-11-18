import { jsx as _jsx } from "react/jsx-runtime";
import { fn } from 'storybook/test';
import Input from './Input';
import EarthSVG from '../../global/Earth';
const meta = {
    title: 'Example/Input',
    component: Input,
    subcomponents: { EarthSVG },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onChange: fn() },
};
export default meta;
export const Large = {
    args: {
        label: 'Search',
        placeholder: 'Type something...',
        size: 'large',
    },
};
export const Medium = {
    args: {
        label: 'Search',
        placeholder: 'Type something...',
        size: 'medium',
    },
};
export const Small = {
    args: {
        label: 'Search',
        placeholder: 'Type something...',
        size: 'small',
    },
};
export const Square = {
    args: {
        label: 'Search',
        placeholder: 'Type something...',
        shape: 'square',
    },
};
export const InputWithIcon = {
    args: {
        label: 'Search',
        placeholder: 'Type something...',
        shape: 'square',
        visibleLabel: true,
    },
    render: (args) => (_jsx(Input, Object.assign({}, args, { icon: _jsx(EarthSVG, { width: 20, height: 20, viewBox: "0 0 20 20", color: '#7f8898' }) }))),
};
export const Disabled = {
    args: {
        disabled: true,
        label: 'Search',
        placeholder: 'Type something...',
    },
};
