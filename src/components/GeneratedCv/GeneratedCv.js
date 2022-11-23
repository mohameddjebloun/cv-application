import classes from "./GeneratedCv.module.css";
const GeneratedCv = (props) => {
    const generalInfoDiv = () => {
        return (
            <div>
                <p>{props.data.generalInfo.firstName}</p>
                <p>{props.data.generalInfo.lastName}</p>
                <p>{props.data.generalInfo.address}</p>
                <p>{props.data.generalInfo.phoneNumber}</p>
                <p>{props.data.generalInfo.email}</p>
                <p>{props.data.generalInfo.description}</p>
                <img
                    src={
                        props.data.generalInfo.image !== "" &&
                        URL.createObjectURL(props.data.generalInfo.image[0])
                    }
                    alt={props.data.generalInfo.image}
                />
            </div>
        );
    };
    const educationalDiv = () => {
        const education = props.data.educationData.map((field) => (
            <div key={field.key}>
                <p>{field.univerity}</p>
                <p>{field.city}</p>
                <p>{field.degree}</p>
                <p>{field.subject}</p>
                <p>{field.startDate}</p>
                <p>{field.endDate}</p>
            </div>
        ));
        return (
            <div>
                <h2>Education</h2>
                {education}
            </div>
        );
    };
    const workingDiv = () => {
        const work = props.data.workingData.map((field) => (
            <div key={field.key}>
                <p>{field.position}</p>
                <p>{field.company}</p>
                <p>{field.city}</p>
                <p>{field.jobStartDate}</p>
                <p>{field.jobEndDate}</p>
            </div>
        ));
        return (
            <div>
                <h2>Work Experience</h2>
                {work}
            </div>
        );
    };
    return (
        <>
            {props.generalInfo && generalInfoDiv()}
            {props.educationData && educationalDiv()}
            {props.workingData && workingDiv()}
        </>
    );
};
export default GeneratedCv;
