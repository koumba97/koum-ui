import React from 'react';
import { ThemeColor } from '../../global/types';
import '../../style/input.css';

export interface InputProps {
    value?: string | number;
    type?: 'text' | 'number';
    placeholder?: string;
    color?: ThemeColor;
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
    label,
    additionalClass,
    visibleLabel = true,
    onChange,
    ...props
}: InputProps) => {
    const reactId = React.useId();
    const inputId = id ? id : reactId;
    const inputShape = shape === 'round' && 'round';
    const iconInput = !visibleLabel && icon && 'icon-input';

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = type === 'number' ? Number(e.target.value) : e.target.value;
        if (onChange) onChange(val);
    };
    return (
        <div className="koum-input-wrapper">
            {visibleLabel ? <label htmlFor={inputId}>{label} </label> : null}
            <div
                className={[
                    'koum-input',
                    size,
                    color,
                    inputShape,
                    iconInput,
                    additionalClass,
                    icon && 'icon',
                ].join(' ')}
                style={{
                    flexDirection:
                        icon && iconPosition === 'left' ? 'row-reverse' : 'row',
                }}
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
            </div>
        </div>
    );
};

export default Input;
