import React, { useEffect, useState } from 'react';
import { IHeadContext } from '../providers/headContext';


function useUser():IHeadContext{
    const [show, setShowInfo] = useState(false);
    const [showForm,setShowForm] = useState(false);
    const handleShow = () => setShowInfo(true);
    const handleFormShow= ()=> setShowForm(true);

    const [username, setUsername] = useState('guest');
    useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(username));
      }, [username])
    
      let value:string='';
    
      useEffect(()=>{
        const storageUserName:string|null = (localStorage.getItem('name'));
        if (storageUserName){
          value = JSON.parse(storageUserName);
          setUsername(value);
          console.log(value)
        }
      },[])

    return (
        {   show,
            showForm,
            setShowInfo, 
            handleShow,
            setShowForm,
            handleFormShow,
            username,
            setUsername
        }
      )
}

export default useUser;