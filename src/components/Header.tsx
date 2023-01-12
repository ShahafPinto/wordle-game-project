import imageToAdd from "./info.png";
import { useContext } from "react";
import { HeadContext } from "../providers/headContext";
import InfoModal from "../ModalPopup/Modal";
import FormModal from "../ModalPopup/formModal";

function Header() {
  const appContext = useContext(HeadContext);
   
  return (
    <>
        <header >
            <div></div>
            <button onClick={appContext?.handleFormShow}>Log In</button>
            <h1 className="">Wordle</h1>
            <img onClick={appContext?.handleShow} src={imageToAdd} alt="info image link"/>
        </header>
        <InfoModal/>
        <FormModal/>
    </>
  )
}

export default Header;