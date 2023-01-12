import { createContext, SetStateAction } from "react";
// import { useState } from "react";

export interface IHeadContext{
    show: boolean,
    showForm: boolean,
    setShowInfo: React.Dispatch<SetStateAction<boolean>>, 
    handleShow:()=>void,
    setShowForm: React.Dispatch<SetStateAction<boolean>>,
    handleFormShow:()=>void,
    username:string,
    setUsername:React.Dispatch<SetStateAction<string>>
}




export const HeadContext =createContext<IHeadContext | null>(null); 
