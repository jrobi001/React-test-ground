import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from './ErrorModal.module.css'

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.handleClose}></div>;
};

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.handleClose}>Okay</Button>
            </footer>
        </Card>
    );
}

const ErrorModal = (props) => {
    return (
        <React.Fragment >
            {ReactDOM.createPortal(
                <Backdrop handleClose={props.handleClose} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay handleClose={props.handleClose}
                    message={props.message} title={props.message} />,
                document.getElementById("overlay-root")
            )}
        </React.Fragment>
    )
}

export default ErrorModal;