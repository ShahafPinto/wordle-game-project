import imageToAdd from "./info.png";
import { useContext } from "react";
import { HeadContext } from "../providers/headContext";
import InfoModal from "../ModalPopup/infoModal";
import FormModal from "../ModalPopup/formModal";
import '../App.scss';
function Header() {
  const user = useContext(HeadContext)

  return (
    <>
        <header >
          {user?.logout && (
            <>
                Hi {user.getUsername()}!
              <button onClick={user.handleLogOut}>Log out</button>
            </>
          )}
          {!user?.logout && (
              <button onClick={user?.handleFormShow}>Log In</button>
          )}
            
            <h1 className="">Wordle</h1>
            <img onClick={user?.handleShowInfo} src={imageToAdd} alt="info link"/>
        </header>
        <InfoModal/>
        <FormModal/>
    </>
  )
}

export default Header;