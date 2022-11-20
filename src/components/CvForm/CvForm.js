//Imports
import classes from "./CvForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import GeneralInformation from "./GeneralInformation/GeneralInformation";
import EducationalExperience from "./EducationalExperience/EducationalExperience";
import WorkingExperience from "./WorkingExperience/WorkingExperience";
import { v4 as uuid } from "uuid";
import { useState } from "react";
//Set initial object states for education and working fields
const initialEducationState = {
    key: uuid(),
    university: "",
    city: "",
    degree: "",
    subject: "",
    startDate: "",
    endDate: "",
};
const initialWorkingState = {
    key: uuid(),
    position: "",
    company: "",
    city: "",
    jobStartDate: "",
    jobEndDate: "",
};
//Create the render array function to render the array of objects
const renderArray = (array, component, setState) => {
    if (component === "EducationalExperience") {
        return array.map((field) => (
            <EducationalExperience
                key={field.key}
                id={field.key}
                wrapperClass={classes["control-group"]}
                inputClass={classes["form-control"]}
                optionalClass={classes.invalid}
                errorClass={classes["error-text"]}
                changeState={setState}
                resetEducation=""
            />
        ));
    } else if (component === "WorkingExperience") {
        return array.map((field) => (
            <WorkingExperience
                key={field.key}
                id={field.key}
                wrapperClass={classes["control-group"]}
                inputClass={classes["form-control"]}
                optionalClass={classes.invalid}
                errorClass={classes["error-text"]}
                changeState={setState}
                resetWorking=""
            />
        ));
    }
};
//Component function
const CvForm = (props) => {
    //Initialize the states
    const [educationalArray, setEducationalArray] = useState([
        initialEducationState,
    ]);
    const [workingArray, setWorkingArray] = useState([initialWorkingState]);
    //Handle the add button click event
    const addEducationClickHandler = () => {
        initialEducationState.key = uuid();
        setEducationalArray((prevState) => [
            ...prevState,
            initialEducationState,
        ]);
    };
    const addWorkingClickHandler = () => {
        initialWorkingState.key = uuid();
        setWorkingArray((prevState) => [...prevState, initialWorkingState]);
    };
    //Handle the reset button click event
    let resetFunc = { generalInfo: "" };
    const resetClickHandler = () => {
        resetFunc.generalInfo();
        setEducationalArray([initialEducationState]);
        setWorkingArray([initialWorkingState]);
    };

    return (
        <Card>
            <form>
                <h2>General Information</h2>
                <GeneralInformation
                    wrapperClass={classes["control-group"]}
                    inputClass={classes["form-control"]}
                    optionalClass={classes.invalid}
                    errorClass={classes["error-text"]}
                    reset={resetFunc}
                />
                <h2>Educational Experience</h2>
                {renderArray(
                    educationalArray,
                    "EducationalExperience",
                    setEducationalArray
                )}
                <Button onClick={addEducationClickHandler}>Add</Button>
                <h2>Working Experience</h2>
                {renderArray(
                    workingArray,
                    "WorkingExperience",
                    setWorkingArray
                )}
                <Button onClick={addWorkingClickHandler}>Add</Button>
            </form>
            <Button onClick={resetClickHandler}>Reset</Button>
        </Card>
    );
};
export default CvForm;
