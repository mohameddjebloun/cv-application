import classes from "./GeneratedCv.module.css";
const GeneratedCv = (props) => {
    const generalInfoDiv = () => {
        return (
            <div className={classes["generalInfo-section-contents"]}>
                <div className={classes.profile}>
                    <img
                        className={classes["profile-image"]}
                        src={
                            props.data.generalInfo.image !== "" &&
                            URL.createObjectURL(props.data.generalInfo.image[0])
                        }
                        alt="Profile"
                    />
                    <p className={classes.name}>
                        {props.data.generalInfo.firstName}{" "}
                        {props.data.generalInfo.lastName}
                    </p>
                    {props.workingData && (
                        <p className={classes.profession}>
                            {
                                props.data.workingData[
                                    props.data.workingData.length - 1
                                ].position
                            }
                        </p>
                    )}
                </div>
                <div className={classes["contact-info"]}>
                    <p className={classes["generalInfo-section-title"]}>
                        Contact Info
                    </p>
                    <ul>
                        <li>
                            <i
                                className={`${classes.fa} ${classes["fa-phone"]}`}
                            />
                            {props.data.generalInfo.phoneNumber}
                        </li>
                        <li>
                            <i
                                className={`${classes.fa} ${classes["fa-envelope"]}`}
                            />
                            {props.data.generalInfo.email}
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
    const educationalDiv = () => {
        const education = props.data.educationData.map((field) => (
            <div key={field.key} className={classes["education-contents"]}>
                <div className={classes["education-left"]}>
                    <p className={classes["education-school-name"]}>
                        {field.university}
                    </p>
                    <p className={classes["education-time-period"]}>
                        {field.startDate} to {field.endDate}
                    </p>
                </div>
                <div className={classes["education-right"]}>
                    <p className={classes["education-subject"]}>
                        {field.subject}
                    </p>
                    <p>{field.degree}</p>
                    <p>{field.city}</p>
                </div>
            </div>
        ));
        return (
            <section className={`${classes.education} ${classes.gap}`}>
                <div className={classes["experience-title"]}>Education</div>
                {education}
            </section>
        );
    };
    const workingDiv = () => {
        const work = props.data.workingData.map((field) => (
            <div key={field.key} className={classes["experience-contents"]}>
                <div className={classes["exp-left"]}>
                    <p className={classes["exp-company-name"]}>
                        {field.company}
                    </p>
                    <p className={classes["exp-time-period"]}>
                        {field.jobStartDate} to {field.jobEndDate}
                    </p>
                </div>
                <div className={classes["exp-right"]}>
                    <p className={classes["exp-position"]}>{field.position}</p>
                    <p>{field.city}</p>
                </div>
            </div>
        ));
        return (
            <section className={`${classes.experience} ${classes.gap}`}>
                <div className={classes["experience-title"]}>Experience</div>
                {work}
            </section>
        );
    };
    return (
        <main ref={props.cvRef} className={classes["resume-contents"]}>
            <section className={classes["generalInfo-section"]}>
                {props.generalInfo && generalInfoDiv()}
            </section>
            <section className={classes["experience-section"]}>
                <div className={classes["experience-section-contents"]}>
                    {props.generalInfo && (
                        <section className={classes.gap}>
                            <div className={classes["experience-title"]}>
                                About Me
                            </div>
                            <p className={classes["about-me-contents"]}>
                                {props.data.generalInfo.description}
                            </p>
                        </section>
                    )}
                    {props.educationData && educationalDiv()}
                    {props.workingData && workingDiv()}
                </div>
            </section>
        </main>
    );
};
export default GeneratedCv;
