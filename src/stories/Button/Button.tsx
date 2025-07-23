import './button.scss';

export interface ButtonProps {
    primary?: boolean;
    style?: 'filled' | 'outlined';
    buttonColor?: string;
    textColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export const Button = ({
    primary = true,
    size = 'medium',
    style = 'filled',
    buttonColor,
    textColor,
    label,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'primary' : 'secondary';
    const buttonStyle = style === 'outlined' ? 'outlined' : null;
    return (
        <button
            type="button"
            className={['koum-button', size, mode, buttonStyle].join(' ')}
            style={{ backgroundColor: buttonColor, color: textColor }}
        >
            {label}
        </button>
    );
};
