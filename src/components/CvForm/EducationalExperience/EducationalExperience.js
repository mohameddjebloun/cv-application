//Imports
import useInput from "../../../hooks/use-input";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
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
        reset: resetUniversity,
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
        value: degreeValue,
        isValid: degreeIsValid,
        hasError: degreeHasError,
        valueChangeHandler: degreeChangeHandler,
        inputBlurHandler: degreeBlurHandler,
        reset: resetDegree,
    } = useInput(isNotEmpty);
    const {
        value: subjectValue,
        isValid: subjectIsValid,
        hasError: subjectHasError,
        valueChangeHandler: subjectChangeHandler,
        inputBlurHandler: subjectBlurHandler,
        reset: resetSubject,
    } = useInput(isNotEmpty);
    const {
        value: startDateValue,
        isValid: startDateIsValid,
        hasError: startDateHasError,
        valueChangeHandler: startDateChangeHandler,
        inputBlurHandler: startDateBlurHandler,
        reset: resetStartDate,
    } = useInput(isNotEmpty);
    const {
        value: endDateValue,
        isValid: endDateIsValid,
        hasError: endDateHasError,
        valueChangeHandler: endDateChangeHandler,
        inputBlurHandler: endDateBlurHandler,
        reset: resetEndDate,
    } = useInput(isNotEmpty);
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
            <Button>Delete</Button>
        </div>
    );
};
export default EducationalExperience;
