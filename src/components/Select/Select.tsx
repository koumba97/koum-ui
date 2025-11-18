import React, { useEffect, useRef, useState } from 'react';
import '../../style/select.css';
import InputWrapper from '../InputWrapper/InputWrapper';
import ChevronSVG from '../../global/Chevron';
import useClickOutside from '../../utils/useClickOutside';
import { KoumThemeColorHex } from '../../global/types';

interface Option {
    value: string | number;
    label: string;
}

export interface SelectProps {
    value?: { label: string; value: string };
    type?: 'text' | 'number';
    placeholder?: string;
    disabled?: boolean;
    shape?: 'round' | 'square';
    icon?: React.ReactNode;
    iconPosition?: 'right' | 'left';
    width?: '100%' | 'max-content';
    id?: string;
    label: string;
    visibleLabel?: boolean;
    options: Option[];
    additionalClass?: string;
    onChange?: (value: string | number) => void;
}

const Select = ({
    value,
    id,
    type = 'text',
    disabled = false,
    placeholder = '',
    shape = 'round',
    icon,
    options,
    iconPosition = 'right',
    width = 'max-content',
    label,
    additionalClass,
    visibleLabel = true,
    onChange,
    ...props
}: SelectProps) => {
    const reactId = React.useId();
    const inputId = id ? id : reactId;
    const [visibleOptions, setVisibleOptions] = useState(false);
    const [selectedValue, setSelectValue] = useState(value);
    const ref = useClickOutside(() => setVisibleOptions(false));
    const selectPlaceholder = placeholder
        ? placeholder
        : label.charAt(0).toUpperCase() + label.slice(1);
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        setVisibleOptions(false);
    }, [selectedValue]);

    const handleClick = () => {
        setVisibleOptions(true);
    };
    const handleSelect = (val: any) => {
        if (selectRef.current) {
            selectRef.current.value = String(val);
            selectRef.current.dispatchEvent(
                new Event('change', { bubbles: true })
            );
        }
        setSelectValue(val);
        onChange?.(val);
    };

    return (
        <div className={`koum-select ${disabled ? 'disabled' : ''}`} ref={ref}>
            <InputWrapper
                label={label}
                size="medium"
                id={inputId}
                width={width}
                shape={shape}
                additionalClass={additionalClass}
                visibleLabel={visibleLabel}
                disabled={disabled}
                element="button"
                onClick={handleClick}
            >
                <select
                    ref={selectRef}
                    className="native-select"
                    defaultValue={value?.value}
                    disabled={disabled}
                    aria-disabled={disabled}
                    aria-label={!visibleLabel ? label : undefined}
                    onChange={(e) => onChange?.(e.target.value)}
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {icon && icon}
                {selectedValue ? (
                    selectedValue.label
                ) : (
                    <span className="placeholder">{selectPlaceholder}</span>
                )}
                <span className={`chevron ${visibleOptions ? 'open' : ''}`}>
                    <ChevronSVG width={15} height={17} color="#7f8898" />
                </span>

                {visibleOptions && (
                    <div className="select-options" role="listbox">
                        {options.map((opt) => (
                            <div
                                key={opt.value}
                                role="option"
                                tabIndex={0}
                                className={`select-option ${opt.value === selectedValue?.value ? 'selected' : ''}`}
                                onClick={() => handleSelect(opt)}
                            >
                                <div className="option-content">
                                    <span>{opt.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </InputWrapper>
        </div>
    );
};

export default Select;
