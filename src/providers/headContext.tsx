import { createContext, SetStateAction } from "react";
// import { useState } from "react";

export interface IHeadContext{
    show: boolean,
    setShow: React.Dispatch<SetStateAction<boolean>>, 
    handleShow:()=>void
}




export const HeadContext =createContext<IHeadContext | null>(null); 
