import '../../style/radio.css';
export interface RadioProps {
    disabled?: boolean;
    id: string;
    label: string;
    name: string;
    checked?: boolean;
    visibleLabel?: boolean;
    onChange?: (id: string) => void;
}
declare const Radio: ({ disabled, label, name, id, visibleLabel, checked, onChange, ...props }: RadioProps) => import("react/jsx-runtime").JSX.Element;
export default Radio;
