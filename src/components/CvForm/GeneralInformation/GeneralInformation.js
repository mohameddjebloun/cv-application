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
    //Return the jsx
    return (
        <div className={props.wrapperClass}>
            <div className={firstNameClasses}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstNameValue}
                    onChange={firstNameChangeHandler}
                    onBlur={firstNameBlurHandler}
                />
                {firstNameHasError && (
                    <p className={props.errorClass}>
                        Please enter a first name.
                    </p>
                )}
            </div>
            <div className={lastNameClasses}>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastNameValue}
                    onChange={lastNameChangeHandler}
                    onBlur={lastNameBlurHandler}
                />
                {lastNameHasError && (
                    <p className={props.errorClass}>
                        Please enter a last name.
                    </p>
                )}
            </div>
            <div className={addressClasses}>
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    value={addressValue}
                    onChange={addressChangeHandler}
                    onBlur={addressBlurHandler}
                />
                {addressHasError && (
                    <p className={props.errorClass}>Please enter an address.</p>
                )}
            </div>
            <div className={phoneNumberClasses}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumberValue}
                    onChange={phoneNumberChangeHandler}
                    onBlur={phoneNumberBlurHandler}
                />
                {phoneNumberHasError && (
                    <p className={props.errorClass}>
                        Please enter a valid phone number.
                    </p>
                )}
            </div>
            <div className={emailClasses}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailHasError && (
                    <p className={props.errorClass}>
                        Please enter a valid email.
                    </p>
                )}
            </div>
            <div className={descriptionClasses}>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    value={descriptionValue}
                    onChange={descriptionChangeHandler}
                    onBlur={descriptionBlurHandler}
                />
                {descriptionHasError && (
                    <p className={props.errorClass}>
                        Please enter a description.
                    </p>
                )}
            </div>
            <div className={imageClasses}>
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    value={imageValue}
                    onChange={imageChangeHandler}
                    onBlur={imageBlurHandler}
                />
                {imageHasError && (
                    <p className={props.errorClass}>
                        Please upload an image file.
                    </p>
                )}
            </div>
        </div>
    );
};
export default GeneralInformation;
