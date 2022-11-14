const isEmail = (value) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
const isNotEmpty = (value) => value.trim() !== "";
const isPhoneNumber = (value) =>
    /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(value);
const GeneralInformation = (props) => {
    return <div className={props.wrapperClass}></div>;
};
export default GeneralInformation;
