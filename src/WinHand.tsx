import React from 'react'
import { Button } from '@mui/material';

const WinHand:React.FC<{message:string}>=({message})=>{
    return (
        <div>
            <div>message</div>
            <Button variant="outlined">ピンフツモ</Button>
            <Button variant="outlined">七対子</Button>
        </div>
    )
}
export default WinHand;