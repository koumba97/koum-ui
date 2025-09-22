import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import RadioButton from './Radio';
import EarthSVG from '../../global/Earth';
import { ThemeColorHex } from '../../global/types';
import Radio from './Radio';

const meta = {
    title: 'Example/Radio',
    component: RadioButton,
    subcomponents: { EarthSVG },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onChange: fn() },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'color',
        label: 'Pink',
        id: 'pink-color',
        disabled: false,
    },
    render: (args) => (
        <div className="koum-group-radio">
            <Radio
                {...args}
                label={args.label}
                id={args.id}
                name={args.name}
                disabled={args.disabled}
            />
            <Radio
                label="Blue"
                id="blue-color"
                name={args.name}
                disabled={args.disabled}
            />
            <Radio
                label="Purple"
                id="purple-color"
                name={args.name}
                disabled={args.disabled}
            />
        </div>
    ),
};
