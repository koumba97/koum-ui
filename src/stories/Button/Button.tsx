import { ComponentType } from 'react';
import { ThemeColor } from '../../global/types';
import './button.scss';

export interface ButtonProps {
    children?: React.ReactNode;
    color?: ThemeColor;
    disabled?: boolean;
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    style?: 'filled' | 'outlined';
    icon?: React.ReactNode;
    label: string;
    visibleLabel?: boolean;
    onClick?: () => void;
}

export const Button = ({
    children,
    color = 'primary',
    disabled = false,
    shape = 'round',
    size = 'medium',
    style = 'filled',
    icon,
    label,
    visibleLabel = true,
    onClick,
    ...props
}: ButtonProps) => {
    const buttonStyle = style === 'outlined' ? 'outlined' : null;
    const buttonShape = shape === 'square' ? 'square' : null;
    const iconButton = !visibleLabel && icon ? 'icon-button' : null;
    return (
        <button
            type="button"
            className={[
                'koum-button',
                size,
                color,
                buttonStyle,
                buttonShape,
                iconButton,
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
