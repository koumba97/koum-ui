import React from 'react';
import { KoumThemeColor } from '../../global/types';
import '../../style/label.css';
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
declare const Label: ({ label, transparent, action, checkLabel, color, deleteLabel, additionalClass, icon, id, isChecked, children, onCheck, onDelete, shape, size, ...props }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
