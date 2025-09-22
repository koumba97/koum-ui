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

const Radio = ({
    disabled = false,
    label,
    name,
    id,
    visibleLabel = true,
    checked,
    onChange,
    ...props
}: RadioProps) => {
    return (
        <div className="koum-radio">
            <input
                type="radio"
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

export default Radio;
