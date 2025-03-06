
import InfoButtonList from '../../molecules/info-button-list'
import './infoButtonListAll.scss'

export interface InfoButtonListAllInterface {
    list: {
        header: string,
        headerIcon: string,
        color: string,
        items: {
            title: string,
            icon: string,
            size?: number
        }[];
    }[]
}


export default function InfoButtonListAll({ list }: InfoButtonListAllInterface) {
    return <div className='info-button-list-all'>{list.map((item: any) => (
        <InfoButtonList list={item}></InfoButtonList>
    ))}</div>
}