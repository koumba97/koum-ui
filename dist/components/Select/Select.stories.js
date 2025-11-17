import { jsx as _jsx } from "react/jsx-runtime";
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
};
export default meta;
export const Round = {
    args: {
        placeholder: 'Select an animal',
        label: 'animal',
        shape: 'round',
        visibleLabel: false,
        options: [
            { label: 'test 1', value: 'test-1' },
            { label: 'test 2', value: 'test-2' },
            { label: 'test 3', value: 'test-3' },
        ],
    },
};
export const Square = {
    args: {
        placeholder: 'Select an animal',
        visibleLabel: false,
        label: 'animal',
        shape: 'square',
        options: [
            { label: 'test 1', value: 'test-1' },
            { label: 'test 2', value: 'test-2' },
            { label: 'test 3', value: 'test-3' },
        ],
    },
};
export const SelectWithIcon = {
    args: {
        label: 'Search',
        placeholder: 'Type something...',
        shape: 'square',
        visibleLabel: false,
        options: [
            { label: 'test 1', value: 'test-1' },
            { label: 'test 2', value: 'test-2' },
            { label: 'test 3', value: 'test-3' },
        ],
    },
    render: (args) => (_jsx(Select, Object.assign({}, args, { icon: _jsx(EarthSVG, { width: 20, height: 20, viewBox: "0 0 20 20", color: "#b1bdd2" }) }))),
};
export const Disabled = {
    args: {
        disabled: true,
        label: 'Search',
        placeholder: 'Type something...',
        options: [
            { label: 'test 1', value: 'test-1' },
            { label: 'test 2', value: 'test-2' },
            { label: 'test 3', value: 'test-3' },
        ],
    },
};
