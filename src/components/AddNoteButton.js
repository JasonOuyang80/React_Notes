import React from 'react';
import './../css/AddNoteButton.css'
import Modal from '../../node_modules/react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const AddNoteButton = (props) => {
    return (
        <div className="text-center">
            <button className="add-notes" id="add-notes">Add Notes</button>
            <Modal isOpen={!props.showModal}>
               <button><FontAwesomeIcon icon={['far', 'faWindowClose']} /></button> 

            </Modal>
                
            
   
        </div>

    );  
}

export default AddNoteButton;