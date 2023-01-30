import Modal from 'react-bootstrap/Modal';
import { HeadContext } from '../providers/headContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InfoModal() {
    const appContext = useContext(HeadContext);

    const handleClose = ()=> {
        appContext?.setShowInfo(false)};

  return (
    <>
        <Modal
        show={appContext?.show}
        onHide={handleClose}
        backdrop="static"
        // keyboard={false}
        
      >
        <Modal.Header closeButton >
          <Modal.Title>How To Play
            <h6>Guess the word in 4 tries.</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
               <li>Each guess must be a valid 5-letter word.</li> 
               <li>The color of the tiles wull change to show how close your guess was to the word.</li> 
            </ul>
            <h6>Examples</h6>
            <ul>
                <li>Green background - this letter in the word in the correct spot</li> 
                <li>Yellow background - this letter in the word but in the wrong spot</li> 
                <li>Gray background - this letter is not in the word in any spot</li>
            </ul>
          
        </Modal.Body>
      </Modal>
    </>
  );
}