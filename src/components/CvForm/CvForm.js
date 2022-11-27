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
    isValid: false,
};
const initialWorkingState = {
    key: uuid(),
    position: "",
    company: "",
    city: "",
    jobStartDate: "",
    jobEndDate: "",
    isValid: false,
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
            />
        ));
    }
};
//Component function
const CvForm = (props) => {
    //Initialize the states
    const [educationalArray, setEducationalArray] = useState([]);
    const [workingArray, setWorkingArray] = useState([]);
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
        setEducationalArray([]);
        setWorkingArray([]);
        props.sendDataUp({});
    };
    //Check if all education fields are valid
    const educationalArrayIsValid = () => {
        for (const item of educationalArray) {
            if (!item.isValid) {
                return false;
            }
        }
        return true;
    };

    //Check if all work fields are valid
    const workingArrayIsValid = () => {
        for (const item of workingArray) {
            if (!item.isValid) {
                return false;
            }
        }
        return true;
    };

    //Handle the form submit event
    const generalInfoData = {};

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (
            !generalInfoData.isValid ||
            !workingArrayIsValid() ||
            !educationalArrayIsValid()
        ) {
            alert("Fill all fields");
            return;
        } else {
            console.log("Submitted");
            props.sendDataUp({
                generalInfo: generalInfoData,
                educationData: educationalArray,
                workingData: workingArray,
            });
        }
    };
    return (
        <Card>
            <form onSubmit={handleFormSubmit}>
                <h2>General Information</h2>
                <GeneralInformation
                    wrapperClass={classes["control-group"]}
                    inputClass={classes["form-control"]}
                    optionalClass={classes.invalid}
                    errorClass={classes["error-text"]}
                    reset={resetFunc}
                    generalInfoData={generalInfoData}
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
                <Button type="submit">Generate CV</Button>
            </form>
            <Button onClick={resetClickHandler}>Reset</Button>
            <Button onClick={props.downloadCvHandler}>Download CV</Button>
        </Card>
    );
};
export default CvForm;
