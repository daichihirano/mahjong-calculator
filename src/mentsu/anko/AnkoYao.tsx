import type { FC } from 'react'
import MentsuButton from '../MentsuButton';

const AnkoYao:FC=()=>{
    interface Mentsu {
        name : string;
        type : string;
        fu : number;
    }

    const mentsuAnkoYao : Mentsu = {
        name:"暗刻",
        type : "1,9,字",
        fu : 8
    };
    return (
        <MentsuButton mentsu={mentsuAnkoYao} />
    )
}
export default AnkoYao;