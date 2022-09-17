import type { FC } from 'react'
import { MentsuInterface } from '../../constance/Interface';
import MentsuButton from '../MentsuButton';

const MinkanYao:FC=()=>{
    const mentsuMinkanYao : MentsuInterface = {
        name:"明槓",
        type : "1,9,字",
        fu : 16
    };
    return (
        <MentsuButton mentsu={mentsuMinkanYao} />
    )
}
export default MinkanYao;