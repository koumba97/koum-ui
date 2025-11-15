import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        label: 'Button',
        size: 'large',
    },
};

export const Medium: Story = {
    args: {
        label: 'Button',
        size: 'medium',
    },
};

export const Small: Story = {
    args: {
        label: 'Button',
        size: 'small',
    },
};

export const Square: Story = {
    args: {
        color: 'primary',
        label: 'Button',
        shape: 'square',
    },
};

export const InputWithIcon: Story = {
    args: {
        color: 'primary',
        label: 'Button',
        shape: 'square',
        visibleLabel: true,
    },
    render: (args) => (
        <Input
            {...args}
            icon={<EarthSVG width={20} height={20} viewBox="0 0 20 20" />}
        />
    ),
};

export const Disabled: Story = {
    args: {
        disabled: true,
        label: 'Button',
    },
};
