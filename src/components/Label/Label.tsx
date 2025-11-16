import React from 'react';
import { KoumThemeColor } from '../../global/types';
import '../../style/label.css';
import CloseSVG from '../../global/Close';

export interface LabelProps {
    action?: 'none' | 'delete' | 'check';
    deleteLabel?: string;
    checkLabel?: string;
    transparent?: boolean;
    color?: KoumThemeColor;
    id?: string;
    icon?: React.ReactNode;
    isChecked?: boolean;
    isDeleted?: boolean;
    children?: React.ReactNode;
    label?: string;
    additionalClass?: string;
    onCheck?: () => void;
    onDelete?: () => void;
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    visibleLabel?: boolean;
}

const Label = ({
    label,
    transparent,
    action = 'none',
    checkLabel = `select ${label}`,
    color = 'primary',
    deleteLabel = `delete ${label}`,
    additionalClass,
    icon,
    id = label,
    isChecked,
    children,
    onCheck,
    onDelete,
    shape = 'round',
    size = 'medium',
    ...props
}: LabelProps) => {
    const labelShape = shape === 'square' ? 'square' : null;
    const labelAction = action !== 'none' ? action : null;
    return (
        <div
            className={[
                'koum-label',
                size,
                color,
                additionalClass,
                labelShape,
                labelAction,
                transparent && 'transparent',
            ].join(' ')}
        >
            <span>
                {icon && <span className="icon">{icon}</span>}
                {label}
                {children}
            </span>
            {action === 'delete' ? (
                <button
                    aria-label={deleteLabel}
                    className="delete-label"
                    onClick={onDelete}
                >
                    <CloseSVG width={10} height={10} viewBox="8 5 120 120" />
                </button>
            ) : action === 'check' ? (
                <input
                    id={id}
                    type="checkbox"
                    checked={isChecked}
                    onChange={onCheck}
                    aria-label={checkLabel}
                />
            ) : null}
        </div>
    );
};

export default Label;
