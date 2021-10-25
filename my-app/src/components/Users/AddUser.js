import React, { useState } from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) => {

    const [user, setUser] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState(null);


    const handleUsernameInput = (event) => {
        setUser(event.target.value);
    }

    const handleAgeInput = (event) => {
        setAge(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.trim().length === 0 || age.trim().length === 0) {
            // setError(false);
            setError({
                title: "Invalid Input",
                message: "Name and age must not be empty",
            });

        } else if (+age < 1) {
            // setError(false);
            setError({
                title: "Invalid Input",
                message: "Age must be > 0",
            });

        } else {
            props.onSuccessfulForm(user, age)
            setUser('');
            setAge('');
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
                <input id="username" type="text" onChange={handleUsernameInput} value={user}></input>
                <label htmlFor="age" >Age</label>
                <input id="age" type="number" onChange={handleAgeInput} value={age}></input>
                <Button type="submit" >Add user</Button>
            </form>
        </Card>)
}

export default AddUser;