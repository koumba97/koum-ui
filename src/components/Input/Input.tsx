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
    onChange?: () => void;
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
    const inputShape = shape === 'square' ? 'square' : null;
    const iconInput = !visibleLabel && icon ? 'icon-input' : null;
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
                    onChange={onChange}
                />
                {icon && icon}
            </div>
        </div>
    );
};

export default Input;
