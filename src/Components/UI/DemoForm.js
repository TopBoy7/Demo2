import React, { useState } from "react";
import styles from "./DemoForm.module.css";
import classes from "./Button.module.css";
import ErrorModal from "./ErrorModal";

function DemoForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  function ageChangeHandler(event) {
    setAge(event.target.value);
  }

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });

      return;
    }

    props.onAddUser(name, age);
    setAge("");
    setName("");
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className={styles["form-control"]}>
          <p>
            <label className={styles["form-control label"]}>Username</label>
            <input
              value={name}
              onChange={nameChangeHandler}
              type="text"
              className={styles["form-control input"]}
            />
          </p>

          <p>
            <label>Age (Years)</label>
            <input value={age} onChange={ageChangeHandler} type="number" />
          </p>
        </div>
        <button type="submit" className={classes["button"]}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default DemoForm;
