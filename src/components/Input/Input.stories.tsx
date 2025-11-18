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
        label: 'Search',
        placeholder: 'Type something...',
        size: 'large',
    },
};

export const Medium: Story = {
    args: {
        label: 'Search',
        placeholder: 'Type something...',
        size: 'medium',
    },
};

export const Small: Story = {
    args: {
        label: 'Search',
        placeholder: 'Type something...',
        size: 'small',
    },
};

export const Square: Story = {
    args: {
        label: 'Search',
        placeholder: 'Type something...',
        shape: 'square',
    },
};

export const InputWithIcon: Story = {
    args: {
        label: 'Search',
        placeholder: 'Type something...',
        shape: 'square',
        visibleLabel: true,
    },
    render: (args) => (
        <Input
            {...args}
            icon={
                <EarthSVG
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    color={'#7f8898'}
                />
            }
        />
    ),
};

export const Disabled: Story = {
    args: {
        disabled: true,
        label: 'Search',
        placeholder: 'Type something...',
    },
};
