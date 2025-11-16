import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import RadioButton from './Radio';
import EarthSVG from '../../global/Earth';
import { KoumThemeColorHex } from '../../global/types';
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
        name: 'animal',
        label: 'Tiger 🐯',
        id: 'tiger-animal',
    },
};

export const Checked: Story = {
    args: {
        name: 'animal',
        label: 'Tiger 🐯',
        id: 'tiger-animal',
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        name: 'animal',
        label: 'Tiger 🐯',
        id: 'tiger-animal',
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        name: 'animal',
        label: 'Tiger 🐯',
        id: 'tiger-animal',
        disabled: true,
        checked: true,
    },
};

export const MultipleRadio: Story = {
    args: {
        name: 'animal',
        label: 'Tiger 🐯',
        id: 'tiger-animal',
        disabled: false,
    },
    render: (args) => {
        const [selectedValue, setSelectedValue] = useState<undefined | string>(
            undefined
        );
        const handleChange = (value: string) => {
            setSelectedValue(value);
        };
        return (
            <div className="koum-component-wrapper">
                <p>Selected value: {selectedValue}</p>
                <div className="koum-group-radio">
                    <Radio
                        label={args.label}
                        id={args.id}
                        name={args.name}
                        disabled={args.disabled}
                        onChange={handleChange}
                    />
                    <Radio
                        label="Lion 🦁"
                        id="lion-animal"
                        name={args.name}
                        disabled={args.disabled}
                        onChange={handleChange}
                    />
                    <Radio
                        label="Bear 🐻"
                        id="bear-animal"
                        name={args.name}
                        disabled={args.disabled}
                        onChange={handleChange}
                    />
                </div>
            </div>
        );
    },
};
