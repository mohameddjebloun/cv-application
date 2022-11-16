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
};
export default EducationalExperience;
