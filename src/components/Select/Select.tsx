import React from 'react';
//import '../../style/input.css';
import InputWrapper from '../InputWrapper/InputWrapper';

export interface SelectProps {
    value?: string | number;
    type?: 'text' | 'number';
    placeholder?: string;
    disabled?: boolean;
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    iconPosition?: 'right' | 'left';
    id?: string;
    label: string;
    visibleLabel?: boolean;
    additionalClass?: string;
    onChange?: (value: string | number) => void;
}

const Select = ({
    value,
    id,
    type = 'text',
    disabled = false,
    placeholder,
    shape = 'round',
    size = 'medium',
    icon,
    iconPosition = 'right',
    label,
    additionalClass,
    visibleLabel = true,
    onChange,
    ...props
}: SelectProps) => {
    const reactId = React.useId();
    const inputId = id ? id : reactId;

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = type === 'number' ? Number(e.target.value) : e.target.value;
        if (onChange) onChange(val);
    };
    return (
        <InputWrapper
            label={label}
            size={size}
            id={inputId}
            shape={shape}
            additionalClass={additionalClass}
        >
            <input
                type={type}
                id={inputId}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                aria-disabled={disabled}
                aria-label={!visibleLabel ? label : undefined}
                onChange={handleInput}
            />
            {icon && icon}
        </InputWrapper>
    );
};

export default Select;
