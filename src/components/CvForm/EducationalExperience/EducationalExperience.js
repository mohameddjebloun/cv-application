//Imports
import useInput from "../../../hooks/use-input";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { useEffect } from "react";
//Validation functions
const isNotEmpty = (value) => value.trim() !== "";
//Component function
const EducationalExperience = (props) => {
    //Input validation
    const {
        value: universityValue,
        isValid: universityIsValid,
        hasError: universityHasError,
        valueChangeHandler: universityChangeHandler,
        inputBlurHandler: universityBlurHandler,
    } = useInput(isNotEmpty);
    const {
        value: cityValue,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
    } = useInput(isNotEmpty);
    const {
        value: degreeValue,
        isValid: degreeIsValid,
        hasError: degreeHasError,
        valueChangeHandler: degreeChangeHandler,
        inputBlurHandler: degreeBlurHandler,
    } = useInput(isNotEmpty);
    const {
        value: subjectValue,
        isValid: subjectIsValid,
        hasError: subjectHasError,
        valueChangeHandler: subjectChangeHandler,
        inputBlurHandler: subjectBlurHandler,
    } = useInput(isNotEmpty);
    const {
        value: startDateValue,
        isValid: startDateIsValid,
        hasError: startDateHasError,
        valueChangeHandler: startDateChangeHandler,
        inputBlurHandler: startDateBlurHandler,
    } = useInput(isNotEmpty);
    const {
        value: endDateValue,
        isValid: endDateIsValid,
        hasError: endDateHasError,
        valueChangeHandler: endDateChangeHandler,
        inputBlurHandler: endDateBlurHandler,
    } = useInput(isNotEmpty);
    //Check section validity
    let educationIsValid;
    if (
        universityIsValid &&
        cityIsValid &&
        degreeIsValid &&
        subjectIsValid &&
        startDateIsValid &&
        endDateIsValid
    ) {
        educationIsValid = true;
    } else {
        educationIsValid = false;
    }
    //Update the object values using useEffect
    useEffect(() => {
        //Update the object values
        props.changeState((prevState) =>
            prevState.map((obj) => {
                if (obj.key === props.id) {
                    return {
                        ...obj,
                        university: universityValue,
                        city: cityValue,
                        degree: degreeValue,
                        subject: subjectValue,
                        startDate: startDateValue,
                        endDate: endDateValue,
                        isValid: educationIsValid,
                    };
                }
                return obj;
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        cityValue,
        degreeValue,
        endDateValue,
        startDateValue,
        subjectValue,
        universityValue,
        props.id,
        props.changeState,
    ]);
    //Handle the delete button click event
    const deleteClickHandler = () => {
        props.changeState((prevState) =>
            prevState.filter((obj) => {
                return obj.key !== props.id;
            })
        );
    };
    //Input classes
    const universityClasses = universityHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const cityClasses = cityHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const degreeClasses = degreeHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const subjectClasses = subjectHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const startDateClasses = startDateHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const endDateClasses = endDateHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;

    //Return the jsx
    return (
        <div className={props.wrapperClass}>
            <Input
                classes={universityClasses}
                errorClass={props.errorClass}
                type="text"
                id="university"
                labelValue={"University"}
                value={universityValue}
                placeHolder="University"
                onChange={universityChangeHandler}
                onBlur={universityBlurHandler}
                errorText="Please enter a university name."
                hasError={universityHasError}
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
                classes={degreeClasses}
                errorClass={props.errorClass}
                type="text"
                id="degree"
                labelValue={"Degree"}
                value={degreeValue}
                placeHolder="Degree"
                onChange={degreeChangeHandler}
                onBlur={degreeBlurHandler}
                errorText="Please enter a degree."
                hasError={degreeHasError}
            />
            <Input
                classes={subjectClasses}
                errorClass={props.errorClass}
                type="text"
                id="subject"
                labelValue={"Subject"}
                value={subjectValue}
                placeHolder="Subject"
                onChange={subjectChangeHandler}
                onBlur={subjectBlurHandler}
                errorText="Please enter a subject."
                hasError={subjectHasError}
            />
            <Input
                classes={startDateClasses}
                errorClass={props.errorClass}
                type="date"
                id="startDate"
                labelValue={"Start Date"}
                value={startDateValue}
                placeHolder="Name"
                onChange={startDateChangeHandler}
                onBlur={startDateBlurHandler}
                errorText="Please select a date."
                hasError={startDateHasError}
            />
            <Input
                classes={endDateClasses}
                errorClass={props.errorClass}
                type="date"
                id="endDate"
                labelValue={"End Date"}
                value={endDateValue}
                placeHolder="Name"
                onChange={endDateChangeHandler}
                onBlur={endDateBlurHandler}
                errorText="Please select a date."
                hasError={endDateHasError}
            />
            <Button onClick={deleteClickHandler}>Delete</Button>
        </div>
    );
};
export default EducationalExperience;
