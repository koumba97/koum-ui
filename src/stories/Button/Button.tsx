import { ThemeColor } from '../../global/types';
import './button.scss';

export interface ButtonProps {
    color?: ThemeColor;
    style?: 'filled' | 'outlined';
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    label: string;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button = ({
    color = 'primary',
    size = 'medium',
    style = 'filled',
    shape = 'round',
    disabled = false,
    label,
    ...props
}: ButtonProps) => {
    const buttonStyle = style === 'outlined' ? 'outlined' : null;
    const buttonShape = shape === 'square' ? 'square' : null;
    return (
        <button
            type="button"
            className={[
                'koum-button',
                size,
                color,
                buttonStyle,
                buttonShape,
            ].join(' ')}
            aria-label={label}
            disabled={disabled}
            aria-disabled={disabled}
        >
            {label}
        </button>
    );
};
