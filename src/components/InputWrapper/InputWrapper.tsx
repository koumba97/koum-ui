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
    width?: '100%' | 'max-content';
    id?: string;
    element?: 'div' | 'button';
    label: string;
    visibleLabel?: boolean;
    additionalClass?: string;
    onChange?: (value: string | number) => void;
    onClick?: () => void;
}

const InputWrapper = ({
    value,
    id,
    type = 'text',
    disabled = false,
    shape = 'round',
    size = 'medium',
    width = '100%',
    icon,
    iconPosition = 'right',
    label,
    additionalClass,
    visibleLabel = true,
    element = 'div',
    children,
    onChange,
    onClick,
    ...props
}: InputWrapperProps) => {
    const reactId = React.useId();
    const inputId = id ? id : reactId;
    const inputShape = shape === 'round' && 'round';
    const iconInput = !visibleLabel && icon && 'icon-input';

    return (
        <div className="koum-input-wrapper">
            {visibleLabel ? <label htmlFor={inputId}>{label} </label> : null}
            {element === 'div' ? (
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
                            icon && iconPosition === 'left'
                                ? 'row-reverse'
                                : 'row',
                        width: width,
                    }}
                >
                    {children}
                </div>
            ) : (
                <button
                    onClick={onClick}
                    disabled={disabled}
                    className={[
                        'koum-input',
                        (size = 'medium'),
                        inputShape,
                        iconInput,
                        additionalClass,
                        disabled && 'disabled',
                        icon && 'icon',
                    ].join(' ')}
                    style={{
                        flexDirection:
                            icon && iconPosition === 'left'
                                ? 'row-reverse'
                                : 'row',
                        width: width,
                    }}
                >
                    {children}
                </button>
            )}
        </div>
    );
};

export default InputWrapper;
