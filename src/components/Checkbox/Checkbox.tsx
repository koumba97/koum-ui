import '../../style/checkbox.css';

export interface CheckboxProps {
    disabled?: boolean;
    id: string;
    label: string;
    name: string;
    checked?: boolean;
    visibleLabel?: boolean;
    onChange?: (id: string) => void;
}

const Checkbox = ({
    disabled = false,
    label,
    name,
    id,
    visibleLabel = true,
    checked,
    onChange,
    ...props
}: CheckboxProps) => {
    return (
        <div className="koum-checkbox">
            <input
                type="checkbox"
                aria-label={!visibleLabel ? label : undefined}
                name={name}
                id={id}
                checked={checked}
                disabled={disabled}
                onChange={() => onChange && onChange(id)}
            />
            {visibleLabel ? <label htmlFor={id}>{label}</label> : null}
        </div>
    );
};

export default Checkbox;
