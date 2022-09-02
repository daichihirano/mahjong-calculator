import React, {useContext} from 'react'
import type { FC } from 'react'
import { Button } from '@mui/material';
import { mentsuListContext } from '../context/Context'

interface Mentsu {
    name : string;
    type : string;
    fu : number;
}

const MentsuButton:FC<{mentsu:Mentsu}>=({mentsu})=>{
    const {mentsuList, setMentsuList} = useContext(mentsuListContext);

    const onClickPointButton = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const newMentsuList : Mentsu[] = [...mentsuList, mentsu];
        if(newMentsuList.length > 4){
            newMentsuList.shift();
        };
        setMentsuList(newMentsuList);
    }

    return (
        <div>
            <Button variant="outlined" value={mentsu.fu} onClick={onClickPointButton}  >{mentsu.name}<br />{mentsu.type}</Button>
        </div>
    )
}
export default MentsuButton;