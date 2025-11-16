import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { fn } from 'storybook/test';
import Label from './Label';
import EarthSVG from '../../global/Earth';
import { KoumThemeColorHex } from '../../global/types';
const meta = {
    title: 'Example/Label',
    component: Label,
    subcomponents: { EarthSVG },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onDelete: fn() },
};
export default meta;
//type Story = StoryObj<typeof Button>;
export const Large = {
    args: {
        label: 'Label',
        size: 'large',
    },
};
export const Medium = {
    args: {
        label: 'Label',
        size: 'medium',
        color: 'secondary',
    },
};
export const Small = {
    args: {
        label: 'Label',
        size: 'small',
        color: 'danger',
    },
};
export const Square = {
    args: {
        label: 'Label',
        color: 'warning',
        size: 'medium',
        shape: 'square',
    },
};
export const DeleteLabel = {
    args: {
        color: 'info',
        label: 'Label',
        shape: 'square',
        action: 'delete',
    },
    render: (args) => {
        const [visibleLabel, setVisibleLabel] = React.useState(true); // ✅ hook dans render
        const handleDelete = () => {
            setVisibleLabel(false);
        };
        return visibleLabel ? (_jsx(Label, Object.assign({}, args, { onDelete: handleDelete }))) : (_jsx(_Fragment, {}));
    },
};
export const ButtonWithIcon = {
    args: {
        color: 'success',
        label: 'Label',
        shape: 'square',
    },
    render: (args) => {
        var _a;
        return (_jsx(Label, Object.assign({}, args, { icon: _jsx(EarthSVG, { width: 15, height: 15, viewBox: "0 0 20 20", color: KoumThemeColorHex[(_a = args.color) !== null && _a !== void 0 ? _a : 'primary'] }) })));
    },
};
