//Imports
import useInput from "../../../hooks/use-input";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { useEffect } from "react";
//Validation functions
const isNotEmpty = (value) => value.trim() !== "";
//Component function
const WorkingExperience = (props) => {
    //Input validation
    const {
        value: positionValue,
        isValid: positionIsValid,
        hasError: positionHasError,
        valueChangeHandler: positionChangeHandler,
        inputBlurHandler: positionBlurHandler,
        reset: resetPosition,
    } = useInput(isNotEmpty);
    const {
        value: companyValue,
        isValid: companyIsValid,
        hasError: companyHasError,
        valueChangeHandler: companyChangeHandler,
        inputBlurHandler: companyBlurHandler,
        reset: resetCompany,
    } = useInput(isNotEmpty);
    const {
        value: cityValue,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCity,
    } = useInput(isNotEmpty);
    const {
        value: jobStartDateValue,
        isValid: jobStartDateIsValid,
        hasError: jobStartDateHasError,
        valueChangeHandler: jobStartDateChangeHandler,
        inputBlurHandler: jobStartDateBlurHandler,
        reset: resetJobStartDate,
    } = useInput(isNotEmpty);
    const {
        value: jobEndDateValue,
        isValid: jobEndDateIsValid,
        hasError: jobEndDateHasError,
        valueChangeHandler: jobEndDateChangeHandler,
        inputBlurHandler: jobEndDateBlurHandler,
        reset: resetJobEndDate,
    } = useInput(isNotEmpty);
    //Update the object values using useEffect
    useEffect(() => {
        //Update the object values
        props.changeState((prevState) =>
            prevState.map((obj) => {
                if (obj.key === props.id) {
                    return {
                        ...obj,
                        position: positionValue,
                        company: companyValue,
                        city: cityValue,
                        jobStartDate: jobStartDateValue,
                        jobEndDate: jobEndDateValue,
                    };
                }
                return obj;
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        positionValue,
        companyValue,
        cityValue,
        jobStartDateValue,
        jobEndDateValue,
        props.id,
        props.changeState,
    ]);
    //Input classes
    const positionClasses = positionHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const companyClasses = companyHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const cityClasses = cityHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const jobStartDateClasses = jobStartDateHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const jobEndDateClasses = jobEndDateHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    //Return the jsx
    return (
        <div className={props.wrapperClass}>
            <Input
                classes={positionClasses}
                errorClass={props.errorClass}
                type="text"
                id="position"
                labelValue={"Position"}
                value={positionValue}
                placeHolder="Position"
                onChange={positionChangeHandler}
                onBlur={positionBlurHandler}
                errorText="Please enter the job position."
                hasError={positionHasError}
            />
            <Input
                classes={companyClasses}
                errorClass={props.errorClass}
                type="text"
                id="company"
                labelValue={"Company"}
                value={companyValue}
                placeHolder="Company"
                onChange={companyChangeHandler}
                onBlur={companyBlurHandler}
                errorText="Please enter the company name."
                hasError={companyHasError}
            />
            <Input
                classes={cityClasses}
                errorClass={props.errorClass}
                type="text"
                id="city"
                labelValue={"City"}
                value={cityValue}
                placeHolder="City"
                onChange={cityChangeHandler}
                onBlur={cityBlurHandler}
                errorText="Please enter a city name."
                hasError={cityHasError}
            />
            <Input
                classes={jobStartDateClasses}
                errorClass={props.errorClass}
                type="date"
                id="jobStartDate"
                labelValue={"Job Start Date"}
                value={jobStartDateValue}
                onChange={jobStartDateChangeHandler}
                onBlur={jobStartDateBlurHandler}
                errorText="Please select a date."
                hasError={jobStartDateHasError}
            />
            <Input
                classes={jobEndDateClasses}
                errorClass={props.errorClass}
                type="date"
                id="jobEndDate"
                labelValue={"Job End Date"}
                value={jobEndDateValue}
                onChange={jobEndDateChangeHandler}
                onBlur={jobEndDateBlurHandler}
                errorText="Please select a date."
                hasError={jobEndDateHasError}
            />
            <Button>Delete</Button>
        </div>
    );
};
export default WorkingExperience;
