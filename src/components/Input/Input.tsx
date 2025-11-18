import React from 'react';
import { KoumThemeColor } from '../../global/types';
import '../../style/input.css';
import InputWrapper from '../InputWrapper/InputWrapper';

export interface InputProps {
    value?: string | number;
    type?: 'text' | 'number';
    placeholder?: string;
    color?: KoumThemeColor;
    disabled?: boolean;
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    iconPosition?: 'right' | 'left';
    width?: '100%' | 'max-content';
    id?: string;
    label: string;
    visibleLabel?: boolean;
    additionalClass?: string;
    onChange?: (value: string | number) => void;
}

const Input = ({
    value,
    id,
    color = 'primary',
    type = 'text',
    disabled = false,
    placeholder,
    shape = 'round',
    size = 'medium',
    icon,
    iconPosition = 'right',
    width = 'max-content',
    label,
    additionalClass,
    visibleLabel = true,
    onChange,
    ...props
}: InputProps) => {
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
            visibleLabel={visibleLabel}
            disabled={disabled}
            element="div"
            icon={icon}
            iconPosition={iconPosition}
            width={width}
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

export default Input;
