import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import Button from './Button';
import EarthSVG from '../../global/Earth';
import { ThemeColorHex } from '../../global/types';

const meta = {
    title: 'Example/Button',
    component: Button,
    subcomponents: { EarthSVG },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        children: 'Button',
        label: 'Button',
        size: 'large',
    },
};

export const Medium: Story = {
    args: {
        children: 'Button',
        label: 'Button',
        size: 'medium',
    },
};

export const Small: Story = {
    args: {
        children: 'Button',
        label: 'Button',
        size: 'small',
    },
};

export const Outlined: Story = {
    args: {
        children: 'Button',
        label: 'Button',
        style: 'outlined',
    },
};

export const Square: Story = {
    args: {
        children: 'Button',
        color: 'primary',
        label: 'Button',
        shape: 'square',
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
        <Button
            {...args}
            icon={
                <EarthSVG
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    color={
                        args.style === 'outlined'
                            ? ThemeColorHex[args.color ?? 'primary']
                            : 'white'
                    }
                />
            }
        />
    ),
};

export const Icon: Story = {
    args: {
        color: 'primary',
        label: 'Button',
        shape: 'square',
        visibleLabel: false,
    },
    render: (args) => (
        <Button
            {...args}
            icon={
                <EarthSVG
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    color="white"
                />
            }
        />
    ),
};

export const Disabled: Story = {
    args: {
        children: 'Button',
        disabled: true,
        label: 'Button',
    },
};
