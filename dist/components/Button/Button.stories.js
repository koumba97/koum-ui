import { jsx as _jsx } from "react/jsx-runtime";
import { fn } from 'storybook/test';
import Button from './Button';
import EarthSVG from '../../global/Earth';
const meta = {
    title: 'Example/Button',
    component: Button,
    subcomponents: { EarthSVG },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
};
export default meta;
//type Story = StoryObj<typeof Button>;
export const Large = {
    args: {
        children: 'Button',
        label: 'Button',
        size: 'large',
    },
};
export const Medium = {
    args: {
        children: 'Button',
        label: 'Button',
        size: 'medium',
    },
};
export const Small = {
    args: {
        children: 'Button',
        label: 'Button',
        size: 'small',
    },
};
export const Outlined = {
    args: {
        children: 'Button',
        label: 'Button',
        style: 'outlined',
    },
};
export const Square = {
    args: {
        children: 'Button',
        color: 'primary',
        label: 'Button',
        shape: 'square',
    },
};
export const ButtonWithIcon = {
    args: {
        color: 'primary',
        label: 'Button',
        shape: 'square',
        visibleLabel: true,
    },
    render: (args) => (_jsx(Button, Object.assign({}, args, { icon: _jsx(EarthSVG, { width: 20, height: 20, viewBox: "0 0 20 20", color: "white" }) }))),
};
export const Icon = {
    args: {
        color: 'primary',
        label: 'Button',
        shape: 'square',
        visibleLabel: false,
    },
    render: (args) => (_jsx(Button, Object.assign({}, args, { icon: _jsx(EarthSVG, { width: 20, height: 20, viewBox: "0 0 20 20", color: "white" }) }))),
};
export const Disabled = {
    args: {
        children: 'Button',
        disabled: true,
        label: 'Button',
    },
};
