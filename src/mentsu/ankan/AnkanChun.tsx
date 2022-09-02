import type { FC } from 'react'
import MentsuButton from '../MentsuButton';

const AnkanChun:FC=()=>{
    interface Mentsu {
        name : string;
        type : string;
        fu : number;
    }

    const mentsuAnkanChun : Mentsu = {
        name:"暗槓",
        type : "2~8",
        fu : 16
    };
    return (
        <MentsuButton mentsu={mentsuAnkanChun} />
    )
}
export default AnkanChun;