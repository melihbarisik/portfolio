import InfoButton from '../../atoms/info-button';
import './info-button-list.scss'
import Icon from '../../atoms/icons';
import { IconNamesType } from '../../atoms/icons/icon.type';


interface InfoButtonListInterface {
    list: {
        header: string,
        headerIcon: string,
        items: {
            title: string,
            icon: string,
            size?: number;
        }[];
    }
}

export default function InfoButtonList({ list }: InfoButtonListInterface) {

    return <div className='info-button-list-container'>
        <div className='info-button-list-header'>
            <Icon icon={list.headerIcon as IconNamesType}></Icon>
            <p>{list.header}</p>
        </div>
        <div className='info-button-list'>
            {list.items.map((item: any, index: number) => (
                <InfoButton title={item.title} icon={item.icon} key={index} size={item.size}></InfoButton>
            ))}
        </div>
    </div>
}