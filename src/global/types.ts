export type ThemeColor =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'neutral';

export enum ThemeColorHex {
    primary = '#272727',
    secondary = '#6146ff',
    info = '#61a0ff',
    success = '#4bc34b',
    warning = '#ffb52b',
    danger = '#b92626',
    neutral = '#99a3b4',
}

export interface SVGProp {
    width: number;
    height: number;
    filled?: boolean;
    viewBox?: viewBox;
    color?: string;
}
export type viewBox = `${number} ${number} ${number} ${number}`;
