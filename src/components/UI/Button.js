import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
    let buttonClasses;
    if (props.children === "Submit") {
        buttonClasses = `${classes.button} ${classes.submit}`;
    } else if (props.children === "Add") {
        buttonClasses = `${classes.button} ${classes.add}`;
    } else if (props.children === "Delete") {
        buttonClasses = `${classes.button} ${classes.delete}`;
    } else if (props.children === "Reset") {
        buttonClasses = `${classes.button} ${classes.reset}`;
    } else {
        buttonClasses = `${classes.button} ${classes.default}`;
    }
    return (
        <button
            className={buttonClasses}
            type={props.type || "button"}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
