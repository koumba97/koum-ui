import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
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
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;
//type Story = StoryObj<typeof Button>;

export const Large: Story = {
    args: {
        label: 'Label',
        size: 'large',
    },
};

export const Medium: Story = {
    args: {
        label: 'Label',
        size: 'medium',
        color: 'secondary',
    },
};

export const Small: Story = {
    args: {
        label: 'Label',
        size: 'small',
        color: 'danger',
    },
};

export const Square: Story = {
    args: {
        label: 'Label',
        color: 'warning',
        size: 'medium',
        shape: 'square',
    },
};

export const DeleteLabel: Story = {
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

        return visibleLabel ? (
            <Label {...args} onDelete={handleDelete} />
        ) : (
            <></>
        );
    },
};

export const ButtonWithIcon: Story = {
    args: {
        color: 'success',
        label: 'Label',
        shape: 'square',
    },

    render: (args) => (
        <Label
            {...args}
            icon={
                <EarthSVG
                    width={15}
                    height={15}
                    viewBox="0 0 20 20"
                    color={KoumThemeColorHex[args.color ?? 'primary']}
                />
            }
        />
    ),
};
