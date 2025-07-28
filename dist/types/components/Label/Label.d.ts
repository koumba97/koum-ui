import React from 'react';
import { ThemeColor } from '../../global/types';
import '../../style/label.css';
export interface LabelProps {
    action?: 'none' | 'delete' | 'check';
    deleteLabel?: string;
    checkLabel?: string;
    color?: ThemeColor;
    id?: string;
    icon?: React.ReactNode;
    isChecked?: boolean;
    isDeleted?: boolean;
    label: string;
    onCheck?: () => void;
    onDelete?: () => void;
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    visibleLabel?: boolean;
}
declare const Label: ({ label, action, checkLabel, color, deleteLabel, icon, id, isChecked, onCheck, onDelete, shape, size, ...props }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
