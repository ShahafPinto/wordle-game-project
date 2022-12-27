import imageToAdd from "./info.png";
import { useContext } from "react";
import { HeadContext } from "../providers/headContext";
import InfoModal from "../ModalPopup/Modal";

function Header() {
    const appContext = useContext(HeadContext);
   

    // const [isModalVisible, SetModalVisible] = useState(false)
    // console.log(isModalVisible)
    // const toggleModal =()=>{
    //     SetModalVisible(!isModalVisible)
    // }
  return (
    <>
        <header >
            <div></div>
            <h1 className="">Wordle</h1>
            <img onClick={appContext?.handleShow} src={imageToAdd} alt="info image link"/>
        </header>
        <InfoModal/>
    </>
  )
}

export default Header;