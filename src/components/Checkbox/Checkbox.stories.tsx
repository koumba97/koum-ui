import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import Checkbox from './Checkbox';

const meta = {
    title: 'Example/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

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
        const [selectedValues, setSelectedValues] = useState<string[]>([]);
        const handleChange = (value: string, checked: boolean) => {
            if (checked && !selectedValues?.includes(value)) {
                setSelectedValues([...selectedValues, value]);
            } else if (!checked && selectedValues?.includes(value)) {
                const updatedSelectedValues = selectedValues.filter(
                    (selectValue) => selectValue !== value
                );
                setSelectedValues(updatedSelectedValues);
            }
        };
        return (
            <div className="koum-component-wrapper">
                <p>Selected value: {selectedValues.join(', ')}</p>
                <div className="koum-group-checkbox">
                    <Checkbox
                        label={args.label}
                        id={args.id}
                        name={args.name}
                        disabled={args.disabled}
                        checked={selectedValues.includes(args.id)}
                        onChange={handleChange}
                    />
                    <Checkbox
                        label="Lion 🦁"
                        id="lion-animal"
                        name={args.name}
                        disabled={args.disabled}
                        checked={selectedValues.includes('lion-animal')}
                        onChange={handleChange}
                    />
                    <Checkbox
                        label="Bear 🐻"
                        id="bear-animal"
                        name={args.name}
                        disabled={args.disabled}
                        checked={selectedValues.includes('bear-animal')}
                        onChange={handleChange}
                    />
                </div>
            </div>
        );
    },
};
