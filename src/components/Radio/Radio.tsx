import '../../style/radio.css';

export interface RadioProps {
    disabled?: boolean;
    id: string;
    label: string;
    name: string;
    checked?: boolean;
    visibleLabel?: boolean;
    additionalClass?: string;
    onChange?: (id: string) => void;
}

const Radio = ({
    disabled = false,
    label,
    name,
    id,
    visibleLabel = true,
    additionalClass,
    checked,
    onChange,
    ...props
}: RadioProps) => {
    return (
        <div className={['koum-radio', additionalClass].join(' ')}>
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
