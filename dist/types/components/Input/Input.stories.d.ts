import type { StoryObj } from '@storybook/react-webpack5';
import EarthSVG from '../../global/Earth';
declare const meta: {
    title: string;
    component: ({ value, id, color, type, disabled, placeholder, shape, size, icon, iconPosition, label, additionalClass, visibleLabel, onChange, ...props }: import("./Input").InputProps) => import("react/jsx-runtime").JSX.Element;
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
export declare const Large: Story;
export declare const Medium: Story;
export declare const Small: Story;
export declare const Square: Story;
export declare const InputWithIcon: Story;
export declare const Disabled: Story;
