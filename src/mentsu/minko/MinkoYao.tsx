import type { FC } from 'react'

import MentsuButton from '../MentsuButton';

const MinkoYao:FC=()=>{
    interface Mentsu {
        name : string;
        type : string;
        fu : number;
    }

    const mentsuMinkoYao : Mentsu = {
        name:"明刻",
        type : "1,9,字",
        fu : 4
    };
    return (
        <MentsuButton mentsu={mentsuMinkoYao} />
    )
}
export default MinkoYao;