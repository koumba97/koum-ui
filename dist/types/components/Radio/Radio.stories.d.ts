import type { StoryObj } from '@storybook/react-webpack5';
import EarthSVG from '../../global/Earth';
declare const meta: {
    title: string;
    component: ({ disabled, label, name, id, visibleLabel, checked, onChange, ...props }: import("./Radio").RadioProps) => import("react/jsx-runtime").JSX.Element;
    subcomponents: {
        EarthSVG: typeof EarthSVG;
    };
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
export declare const Checked: Story;
export declare const Disabled: Story;
export declare const DisabledChecked: Story;
export declare const MultipleRadio: Story;
