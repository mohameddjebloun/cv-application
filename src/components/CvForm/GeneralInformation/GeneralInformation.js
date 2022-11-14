//Imports
import useInput from "../../../hooks/use-input";
import Input from "../../UI/Input";
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
    //Return the jsx
    return (
        <div className={props.wrapperClass}>
            <Input
                classes={firstNameClasses}
                type="text"
                id="firstName"
                labelValue={"First Name"}
                value={firstNameValue}
                placeHolder="Name"
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
            />

            {firstNameHasError && (
                <p className={props.errorClass}>Please enter a first name.</p>
            )}
            <Input
                classes={lastNameClasses}
                type="text"
                id="lastName"
                labelValue={"Last Name"}
                value={lastNameValue}
                placeHolder="Name"
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
            />

            {lastNameHasError && (
                <p className={props.errorClass}>Please enter a last name.</p>
            )}
            <Input
                classes={addressClasses}
                type="text"
                id="address"
                labelValue={"Address"}
                value={addressValue}
                placeHolder="Address"
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
            />

            {addressHasError && (
                <p className={props.errorClass}>Please enter an address.</p>
            )}
            <Input
                classes={phoneNumberClasses}
                type="text"
                id="phoneNumber"
                labelValue={"Phone Number"}
                value={phoneNumberValue}
                placeHolder="xxxxxxxxxx"
                onChange={phoneNumberChangeHandler}
                onBlur={phoneNumberBlurHandler}
            />

            {phoneNumberHasError && (
                <p className={props.errorClass}>
                    Please enter a valid phone number.
                </p>
            )}
            <Input
                classes={emailClasses}
                type="text"
                id="email"
                labelValue={"Email"}
                value={emailValue}
                placeHolder="test@test.com"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
            />

            {emailHasError && (
                <p className={props.errorClass}>Please enter a valid email.</p>
            )}
            <textarea
                className={descriptionClasses}
                placeholder="Description..."
                value={descriptionValue}
                onChange={descriptionChangeHandler}
                onBlur={descriptionBlurHandler}
            ></textarea>
            {descriptionHasError && (
                <p className={props.errorClass}>Please enter a description.</p>
            )}
            <Input
                classes={imageClasses}
                type="file"
                id="image"
                labelValue={"Image"}
                value={imageValue}
                onChange={imageChangeHandler}
                onBlur={imageBlurHandler}
            />

            {imageHasError && (
                <p className={props.errorClass}>Please upload an image file.</p>
            )}
        </div>
    );
};
export default GeneralInformation;
