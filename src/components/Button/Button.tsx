import React from 'react';
import { KoumThemeColor } from '../../global/types';
import '../../style/button.css';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    color?: KoumThemeColor;
    disabled?: boolean;
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    buttonStyle?: 'filled' | 'outlined';
    icon?: React.ReactNode;
    iconPosition?: 'right' | 'left';
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
    iconPosition = 'left',
    label,
    additionalClass,
    visibleLabel = true,
    onClick,
    ...props
}: ButtonProps) => {
    const style = buttonStyle === 'outlined' ? 'outlined' : null;
    const buttonShape = shape === 'square' ? 'square' : null;
    const iconButton = !visibleLabel && icon ? 'icon-button' : null;
    const position = icon ? `icon-${iconPosition}` : null;
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
                position,
                additionalClass,
            ].join(' ')}
            aria-label={label}
            disabled={disabled}
            aria-disabled={disabled}
            onClick={onClick}
        >
            <label>
                {icon && <span className="icon">{icon}</span>}
                {visibleLabel ? (
                    <span className="button-text">{label}</span>
                ) : null}
            </label>
        </button>
    );
};

export default Button;
