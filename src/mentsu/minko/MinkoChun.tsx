import type { FC } from 'react'
import MentsuButton from '../MentsuButton';

const MinkoChun:FC=()=>{
    interface Mentsu {
        name : string;
        type : string;
        fu : number;
    };

    const mentsuMinkoChun : Mentsu = {
        name:"明刻",
        type : "2~8",
        fu : 2
    };
    return (
        <MentsuButton mentsu={mentsuMinkoChun} />
    )
}
export default MinkoChun;