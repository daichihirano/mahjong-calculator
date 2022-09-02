import type { FC } from 'react'
import MentsuButton from '../MentsuButton';

const AnkanYao:FC=()=>{
    interface Mentsu {
        name : string;
        type : string;
        fu : number;
    }

    const mentsuAnkanYao : Mentsu = {
        name:"暗槓",
        type : "1,9,字",
        fu : 32
    };
    return (
        <MentsuButton mentsu={mentsuAnkanYao} />
    )
}
export default AnkanYao;