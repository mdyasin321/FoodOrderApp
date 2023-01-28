import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';


const Backdrop=(props)=>{
    return(

        <div className={classes.backdrop} ></div>

    )
}//this is the actual modal which will contain the details
const ModalDescription=(props)=>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}


const Modal=(props)=>{
    return (
        <React.Fragment>
        {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalDescription>{props.children}</ModalDescription>, document.getElementById('modaloverlay-root'))}
    </React.Fragment>
    )
}

export default Modal;
