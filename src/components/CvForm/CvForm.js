import classes from "./CvForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import GeneralInformation from "./GeneralInformation/GeneralInformation";
import EducationalExperience from "./EducationalExperience/EducationalExperience";
import WorkingExperience from "./WorkingExperience/WorkingExperience";
import { v4 as uuid } from "uuid";
import { useState } from "react";
const renderArray = (array, component) => {
    if (component === "EducationalExperience") {
        return array.map((field) => (
            <EducationalExperience
                key={field.key}
                wrapperClass={classes["control-group"]}
                inputClass={classes["form-control"]}
                optionalClass={classes.invalid}
                errorClass={classes["error-text"]}
                fieldValues={field}
            />
        ));
    } else if (component === "WorkingExperience") {
        return array.map((field) => (
            <WorkingExperience
                key={field.key}
                wrapperClass={classes["control-group"]}
                inputClass={classes["form-control"]}
                optionalClass={classes.invalid}
                errorClass={classes["error-text"]}
                fieldValues={field}
            />
        ));
    }
};
const CvForm = (props) => {
    const [educationalArray, setEducationalArray] = useState([
        {
            key: uuid(),
            university: "",
            city: "",
            degree: "",
            subject: "",
            startDate: "",
            endDate: "",
        },
    ]);
    const [workingArray, setWorkingArray] = useState([
        {
            key: uuid(),
            position: "",
            company: "",
            city: "",
            jobStartDate: "",
            jobEndDate: "",
        },
    ]);
    return (
        <Card>
            <form>
                <h2>General Information</h2>
                <GeneralInformation
                    wrapperClass={classes["control-group"]}
                    inputClass={classes["form-control"]}
                    optionalClass={classes.invalid}
                    errorClass={classes["error-text"]}
                />
                <h2>Educational Experience</h2>
                {renderArray(educationalArray, "EducationalExperience")}
                <Button>Add</Button>
                <h2>Working Experience</h2>
                {renderArray(workingArray, "WorkingExperience")}
                <Button>Add</Button>
            </form>
        </Card>
    );
};
export default CvForm;
