import imageToAdd from "./info.png";
import { useContext, useState } from "react";
import { HeadContext } from "../providers/headContext";
import InfoModal from "../ModalPopup/Modal";
import FormModal from "../ModalPopup/formModal";
import useUser from "../tsx/useUser";

function Header() {
  const appContext = useContext(HeadContext);
  const user = useUser()

  const [logout,setLogout] = useState(user.logOut);
  const handleLogOut=()=>{
    localStorage.removeItem('name')
    setLogout(false);
  }

  return (
    <>
        <header >
          {logout && (
            <>
                Hi {user.getUsername()}!
              <button onClick={handleLogOut}>Log out</button>
            </>
          )}
          {!logout && (
              <button onClick={appContext?.handleFormShow}>Log In</button>
          )}
            
            <h1 className="">Wordle</h1>
            <img onClick={appContext?.handleShow} src={imageToAdd} alt="info image link"/>
        </header>
        <InfoModal/>
        <FormModal/>
    </>
  )
}

export default Header;