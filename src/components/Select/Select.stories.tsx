import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import Select from './Select';
import EarthSVG from '../../global/Earth';

const meta = {
    title: 'Example/Select',
    component: Select,
    subcomponents: { EarthSVG },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Select',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Select',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Select',
    },
};

export const Square: Story = {
    args: {
        shape: 'square',
        label: 'Select',
    },
};

export const SelectWithIcon: Story = {
    args: {
        label: 'Search',
        placeholder: 'Type something...',
        shape: 'square',
        visibleLabel: true,
    },
    render: (args) => (
        <Select
            {...args}
            icon={
                <EarthSVG
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    color="#b1bdd2"
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
