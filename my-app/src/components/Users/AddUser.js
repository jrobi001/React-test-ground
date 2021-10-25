import React, { useState, useRef } from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Name and age must not be empty",
            });

        } else if (+enteredAge < 1) {
            setError({
                title: "Invalid Input",
                message: "Age must be > 0",
            });

        } else {
            props.onSuccessfulForm(enteredName, enteredAge);
            nameInputRef.current.value = '';
            ageInputRef.current.value = ''
        }
    }

    const handleCloseWarning = () => {
        setError(null);
    }

    return (
        <Card className={styles.input}>
            {error && <ErrorModal title={error.title} message={error.message} handleClose={handleCloseWarning}></ErrorModal>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" >User Name</label>
                <input
                    id="username"
                    type="text"
                    ref={nameInputRef}
                />
                <label htmlFor="age" >Age</label>
                <input
                    id="age"
                    type="number"
                    ref={ageInputRef}
                />
                <Button type="submit" >Add user</Button>
            </form>
        </Card>)
}

export default AddUser;