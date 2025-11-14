import type { StoryObj } from '@storybook/react-webpack5';
import EarthSVG from '../../global/Earth';
declare const meta: {
    title: string;
    component: ({ children, color, disabled, shape, size, buttonStyle, icon, label, additionalClass, visibleLabel, onClick, ...props }: import("./Button").ButtonProps) => import("react/jsx-runtime").JSX.Element;
    subcomponents: {
        EarthSVG: typeof EarthSVG;
    };
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Large: Story;
export declare const Medium: Story;
export declare const Small: Story;
export declare const Outlined: Story;
export declare const Square: Story;
export declare const ButtonWithIcon: Story;
export declare const Icon: Story;
export declare const Disabled: Story;
