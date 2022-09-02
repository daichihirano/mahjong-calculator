import type { FC } from 'react'
import MentsuButton from '../MentsuButton';

const MinkanYao:FC=()=>{
    interface Mentsu {
        name : string;
        type : string;
        fu : number;
    }

    const mentsuMinkanYao : Mentsu = {
        name:"明槓",
        type : "1,9,字",
        fu : 16
    };
    return (
        <MentsuButton mentsu={mentsuMinkanYao} />
    )
}
export default MinkanYao;