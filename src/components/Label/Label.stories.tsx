import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import Label from './Label';
import EarthSVG from '../../global/Earth';
import { ThemeColorHex } from '../../global/types';

const meta = {
    title: 'Example/Label',
    component: Label,
    subcomponents: { EarthSVG },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
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
    },
};

export const ButtonWithIcon: Story = {
    args: {
        color: 'primary',
        label: 'Button',
        shape: 'square',
        visibleLabel: true,
    },
    render: (args) => (
        <Label
            {...args}
            icon={
                <EarthSVG
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    color={ThemeColorHex[args.color]}
                />
            }
        />
    ),
};
