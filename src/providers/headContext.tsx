import { createContext, SetStateAction } from "react";
import { Istorage } from "../tsx/useUser";
// import { useState } from "react";

export interface IHeadContext{
    show: boolean,
    showForm: boolean,
    setShowInfo: React.Dispatch<SetStateAction<boolean>>, 
    handleShow:()=>void,
    setShowForm: React.Dispatch<SetStateAction<boolean>>,
    handleFormShow:()=>void,
    username:Istorage,
    setUsername:React.Dispatch<SetStateAction<Istorage>>,
    getUsername: ()=>string
    
    // inputName:string
}

export const HeadContext =createContext<IHeadContext | null>(null); 
