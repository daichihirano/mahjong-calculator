import type { FC } from 'react'
import MentsuButton from './MentsuButton';


const Shuntsu:FC=()=>{
    interface Mentsu {
        name : string;
        type : string;
        fu : number;
    }

    const mentsuShuntsu : Mentsu = {
        name:"順子",
        type : " ",
        fu : 0
    };
    return (
        <MentsuButton mentsu={mentsuShuntsu} />
    )
}
export default Shuntsu;