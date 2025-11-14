import '../../style/checkbox.css';
export interface CheckboxProps {
    disabled?: boolean;
    id: string;
    label: string;
    name: string;
    checked?: boolean;
    visibleLabel?: boolean;
    onChange?: (id: string, checked: boolean) => void;
}
declare const Checkbox: ({ disabled, label, name, id, visibleLabel, checked, onChange, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export default Checkbox;
