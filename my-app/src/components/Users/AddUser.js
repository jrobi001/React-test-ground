import React, { useState } from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button"


const AddUser = (props) => {

    const [user, setUser] = useState("");
    const [age, setAge] = useState("");
    // const [, set] = useState(initialState)

    const handleUsernameInput = (event) => {
        setUser(event.target.value);
    }

    const handleAgeInput = (event) => {
        setAge(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.trim().length === 0 || age.trim().length === 0) {
            props.onInvalidForm();
        } else if (+age < 1) {
            props.onInvalidForm();
        } else {
            props.onSuccessfulForm(user, age)
        }

        setUser('');
        setAge('');
    }




    return (
        <Card className={styles.input}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" >User Name</label>
                <input id="username" type="text" onChange={handleUsernameInput} value={user}></input>
                <label htmlFor="age" >Age</label>
                <input id="age" type="number" onChange={handleAgeInput} value={age}></input>
                <Button type="submit" >Add user</Button>
            </form>
        </Card>
    )

};


export default AddUser;