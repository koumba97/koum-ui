import { jsx as _jsx } from "react/jsx-runtime";
import { fn } from 'storybook/test';
import Button from './Button';
import EarthSVG from '../../global/Earth';
import { KoumThemeColorHex } from '../../global/types';
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
        buttonStyle: 'outlined',
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
    render: (args) => {
        var _a;
        return (_jsx(Button, Object.assign({}, args, { icon: _jsx(EarthSVG, { width: 20, height: 20, viewBox: "0 0 20 20", color: args.buttonStyle === 'outlined'
                    ? KoumThemeColorHex[(_a = args.color) !== null && _a !== void 0 ? _a : 'primary']
                    : 'white' }) })));
    },
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
