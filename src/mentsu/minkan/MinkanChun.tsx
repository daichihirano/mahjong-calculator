import type { FC } from 'react'
import MentsuButton from '../MentsuButton';

const MinkanChun:FC=()=>{
    interface Mentsu {
        name : string;
        type : string;
        fu : number;
    }

    const mentsuMinkanChun : Mentsu = {
        name:"明槓",
        type : "2~8",
        fu : 8
    };
    return (
        <MentsuButton mentsu={mentsuMinkanChun} />
    )
}
export default MinkanChun;