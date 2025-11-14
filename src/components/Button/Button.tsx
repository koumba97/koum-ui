import React from 'react';
import { ThemeColor } from '../../global/types';
import '../../style/button.css';

export interface ButtonProps {
    children?: React.ReactNode;
    color?: ThemeColor;
    disabled?: boolean;
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    buttonStyle?: 'filled' | 'outlined';
    icon?: React.ReactNode;
    label: string;
    visibleLabel?: boolean;
    additionalClass?: string;
    onClick?: () => void;
}

const Button = ({
    children,
    color = 'primary',
    disabled = false,
    shape = 'round',
    size = 'medium',
    buttonStyle = 'filled',
    icon,
    label,
    additionalClass,
    visibleLabel = true,
    onClick,
    ...props
}: ButtonProps) => {
    const style = buttonStyle === 'outlined' ? 'outlined' : null;
    const buttonShape = shape === 'square' ? 'square' : null;
    const iconButton = !visibleLabel && icon ? 'icon-button' : null;
    return (
        <button
            type="button"
            className={[
                'koum-button',
                size,
                color,
                style,
                buttonShape,
                iconButton,
                additionalClass,
            ].join(' ')}
            aria-label={label}
            disabled={disabled}
            aria-disabled={disabled}
            onClick={onClick}
        >
            <label>
                {icon && <span className="icon">{icon}</span>}
                {visibleLabel ? label : null}
            </label>
        </button>
    );
};

export default Button;
