import type { StoryObj } from '@storybook/react-webpack5';
import EarthSVG from '../../global/Earth';
declare const meta: {
    title: string;
    component: ({ label, action, checkLabel, color, deleteLabel, icon, id, isChecked, onCheck, onDelete, shape, size, ...props }: import("./Label").LabelProps) => import("react/jsx-runtime").JSX.Element;
    subcomponents: {
        EarthSVG: typeof EarthSVG;
    };
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        onDelete: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Large: Story;
export declare const Medium: Story;
export declare const Small: Story;
export declare const Square: Story;
export declare const DeleteLabel: Story;
export declare const ButtonWithIcon: Story;
