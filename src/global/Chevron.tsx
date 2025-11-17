import { SVGProp } from './types';

export default function ChevronSVG({
    width,
    height,
    viewBox,
    color = 'black',
}: SVGProp) {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox ? viewBox : `-1 -5 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 1.95555L6 6.95555L1 1.95555"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
