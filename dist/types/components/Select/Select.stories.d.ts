import type { StoryObj } from '@storybook/react-webpack5';
import EarthSVG from '../../global/Earth';
declare const meta: {
    title: string;
    component: ({ value, id, type, disabled, placeholder, shape, icon, options, iconPosition, width, label, additionalClass, visibleLabel, onChange, ...props }: import("./Select").SelectProps) => import("react/jsx-runtime").JSX.Element;
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
export declare const Round: Story;
export declare const Square: Story;
export declare const SelectWithIcon: Story;
export declare const Disabled: Story;
