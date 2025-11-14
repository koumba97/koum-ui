import type { StoryObj } from '@storybook/react-webpack5';
declare const meta: {
    title: string;
    component: ({ disabled, label, name, id, visibleLabel, checked, onChange, ...props }: import("./Checkbox").CheckboxProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        onChange: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const DisabledChecked: Story;
export declare const MultipleRadio: Story;
