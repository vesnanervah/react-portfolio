import { mulish } from "./fonts";

export default function SectionHeader(props: SectionHeaderProps){
    return <div className={`text-3xl ${props.color} ${props.className}`}>
        {props.header}
        <div className={`${mulish.className} text-base pt-3`}>
            {props.children}
        </div>
    </div>
}

export interface SectionHeaderProps {
    header: string;
    color: SectionHeaderColor,
    children: React.ReactNode,
    className?: string,
}

export enum SectionHeaderColor {
    white = 'text-white',
    black = 'text-stone-900'
}