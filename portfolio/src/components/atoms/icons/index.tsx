import React from 'react';
import Icons from './icons';
import { IconNamesType } from './icon.type';

export type IconNames = IconNamesType;

interface IconProps {
    icon: IconNames;
    size?: number;
}

const Icon: React.FC<IconProps> = ({ icon = 'angular', size = 24 }) => {
    const useIcon = Icons.find((item) => item.name === icon);

    return (
        <svg
            width={size}
            height={size}
            viewBox={useIcon?.viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d={useIcon?.d} 
                fill={useIcon?.color} 
                fillRule="evenodd" 
                clipRule="evenodd"
            />
        </svg>
    );
};

export default Icon;