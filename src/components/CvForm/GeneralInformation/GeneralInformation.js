//Imports
import useInput from "../../../hooks/use-input";
//Validation functions
const isEmail = (value) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
const isNotEmpty = (value) => value.trim() !== "";
const isPhoneNumber = (value) =>
    /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(value);
//Component function
const GeneralInformation = (props) => {
    //Input validation
    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput(isNotEmpty);
    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput(isNotEmpty);
    const {
        value: addressValue,
        isValid: addressIsValid,
        hasError: addressHasError,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddress,
    } = useInput(isNotEmpty);
    const {
        value: phoneNumberValue,
        isValid: phoneNumberIsValid,
        hasError: phoneNumberHasError,
        valueChangeHandler: phoneNumberChangeHandler,
        inputBlurHandler: phoneNumberBlurHandler,
        reset: resetPhoneNumber,
    } = useInput(isPhoneNumber);
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);
    const {
        value: descriptionValue,
        isValid: descriptionIsValid,
        hasError: descriptionHasError,
        valueChangeHandler: descriptionChangeHandler,
        inputBlurHandler: descriptionBlurHandler,
        reset: resetDescription,
    } = useInput(isNotEmpty);
    const {
        value: imageValue,
        isValid: imageIsValid,
        hasError: imageHasError,
        valueChangeHandler: imageChangeHandler,
        inputBlurHandler: imageBlurHandler,
        reset: resetImage,
    } = useInput(isNotEmpty);
    //Input classes
    const firstNameClasses = firstNameHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const lastNameClasses = lastNameHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const addressClasses = addressHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const phoneNumberClasses = phoneNumberHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const emailClasses = emailHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const descriptionClasses = descriptionHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    const imageClasses = imageHasError
        ? `${props.inputClass} ${props.optionalClass}`
        : props.inputClass;
    return <div className={props.wrapperClass}></div>;
};
export default GeneralInformation;
