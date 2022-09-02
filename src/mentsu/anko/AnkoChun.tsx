import type { FC } from 'react'
import MentsuButton from '../MentsuButton';

const AnkoChun:FC=()=>{
    interface Mentsu {
        name : string;
        type : string;
        fu : number;
    }

    const mentsuAnkoChun : Mentsu = {
        name:"暗刻",
        type : "2~8",
        fu : 4
    };
    return (
        <MentsuButton mentsu={mentsuAnkoChun} />
    )
}
export default AnkoChun;