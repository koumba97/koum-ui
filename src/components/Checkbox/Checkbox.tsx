import { useEffect, useState } from 'react';
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

const Checkbox = ({
    disabled = false,
    label,
    name,
    id,
    visibleLabel = true,
    checked = false,
    onChange,
    ...props
}: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);
    return (
        <div className="koum-checkbox">
            <input
                type="checkbox"
                aria-label={!visibleLabel ? label : undefined}
                name={name}
                id={id}
                checked={isChecked}
                disabled={disabled}
                onChange={() => onChange && onChange(id, !isChecked)}
            />
            {visibleLabel ? <label htmlFor={id}>{label}</label> : null}
        </div>
    );
};

export default Checkbox;
