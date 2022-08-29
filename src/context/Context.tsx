import React from 'react';

export const pointContext=React.createContext({} as{
    basePoint : number
    setBasePoint : React.Dispatch<React.SetStateAction<number>>
});

export const subPointContext=React.createContext({} as{
    subPoint : number
    setSubPoint : React.Dispatch<React.SetStateAction<number>>
});

export const headContext=React.createContext({} as{
    head : number
    setHead : React.Dispatch<React.SetStateAction<number>>
});

export const waitContext=React.createContext({} as{
    wait : number
    setWait : React.Dispatch<React.SetStateAction<number>>
});