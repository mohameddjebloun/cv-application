const Input = (props) => {
    return (
        <>
            <div className={props.classes}>
                <label htmlFor={props.id}>{props.labelValue}</label>
                <input
                    type={props.type}
                    id={props.id}
                    value={props.value}
                    placeholder={props.placeHolder}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                />
            </div>
            {props.hasError && (
                <p className={props.errorClass}>{props.errorText}</p>
            )}
        </>
    );
};
export default Input;
