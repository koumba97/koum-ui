import React from 'react';
import { ThemeColor, ThemeColorHex } from '../../global/types';
import '../../style/label.css';
import CloseSVG from '../../global/Close';

export interface LabelProps {
    action?: 'none' | 'delete' | 'check';
    isChecked?: boolean;
    isDeleted?: boolean;
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
    onCheck?: () => void;
    onDelete?: () => void;
}

const Label = ({
    action = 'none',
    children,
    color = 'primary',
    disabled = false,
    shape = 'round',
    size = 'medium',
    style = 'filled',
    icon,
    label,
    onClick,
    ...props
}: LabelProps) => {
    const buttonStyle = style === 'outlined' ? 'outlined' : null;
    const buttonShape = shape === 'square' ? 'square' : null;
    return (
        <div
            className={[
                'koum-label',
                size,
                color,
                buttonStyle,
                buttonShape,
            ].join(' ')}
            aria-label={label}
            //disabled={disabled}
            aria-disabled={disabled}
            onClick={onClick}
        >
            <label>
                {icon && <span className="icon">{icon}</span>}
                {label}
            </label>
            {action === 'delete' ? (
                <button>
                    <CloseSVG width={10} height={10} viewBox="8 5 120 120" />
                </button>
            ) : action === 'check' ? (
                <input type="checkbox" id="" name="" />
            ) : null}
        </div>
    );
};

export default Label;
