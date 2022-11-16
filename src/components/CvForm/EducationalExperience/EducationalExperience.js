//Imports
import useInput from "../../../hooks/use-input";
import Input from "../../UI/Input";
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
};
export default EducationalExperience;
