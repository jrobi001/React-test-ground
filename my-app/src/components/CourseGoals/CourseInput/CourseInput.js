import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // don't accept empty inputs
    if (enteredValue.trim().length === 0) {
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} required='true' pattern=".*\S+.*" title="This field is required" />
      </div>
      <Button isReady={isValid} type="submit" >Add Goal</Button>
    </form>
  );
};

export default CourseInput;
