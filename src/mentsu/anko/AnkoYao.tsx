import type { FC } from 'react'
import { MentsuInterface } from '../../constance/Interface';
import MentsuButton from '../MentsuButton';

const AnkoYao:FC=()=>{
    const mentsuAnkoYao : MentsuInterface = {
        name:"暗刻",
        type : "1,9,字",
        fu : 8
    };
    return (
        <MentsuButton mentsu={mentsuAnkoYao} />
    )
}
export default AnkoYao;