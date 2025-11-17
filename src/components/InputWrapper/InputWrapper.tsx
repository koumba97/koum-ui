import React from 'react';
import { KoumThemeColor } from '../../global/types';
import '../../style/input-wrapper.css';

export interface InputWrapperProps {
    value?: string | number;
    type?: 'text' | 'number';
    disabled?: boolean;
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    children: React.ReactNode;
    iconPosition?: 'right' | 'left';
    id?: string;
    label: string;
    visibleLabel?: boolean;
    additionalClass?: string;
    onChange?: (value: string | number) => void;
}

const InputWrapper = ({
    value,
    id,
    type = 'text',
    disabled = false,
    shape = 'round',
    size = 'medium',
    icon,
    iconPosition = 'right',
    label,
    additionalClass,
    visibleLabel = true,
    children,
    onChange,
    ...props
}: InputWrapperProps) => {
    const reactId = React.useId();
    const inputId = id ? id : reactId;
    const inputShape = shape === 'round' && 'round';
    const iconInput = !visibleLabel && icon && 'icon-input';

    return (
        <div className="koum-input-wrapper">
            {visibleLabel ? <label htmlFor={inputId}>{label} </label> : null}
            <div
                className={[
                    'koum-input',
                    size,
                    inputShape,
                    iconInput,
                    additionalClass,
                    icon && 'icon',
                ].join(' ')}
                style={{
                    flexDirection:
                        icon && iconPosition === 'left' ? 'row-reverse' : 'row',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default InputWrapper;
