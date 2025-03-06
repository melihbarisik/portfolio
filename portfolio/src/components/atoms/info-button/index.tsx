import './infoButton.scss'
import Icon from '../icons';
import { IconNamesType } from '../icons/icon.type';

interface InfoButton {
    icon: string;
    title: string;
    size: number;
}

export default function InfoButton({ icon, title, size }: InfoButton) {
    return (
        <div className="info-button-container">
            <Icon icon={icon as IconNamesType} size={size}></Icon>
            <p>{title}</p>
        </div>
    );
}