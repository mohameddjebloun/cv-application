import classes from "./CvForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import GeneralInformation from "./GeneralInformation/GeneralInformation";
import EducationalExperience from "./EducationalExperience/EducationalExperience";
import WorkingExperience from "./WorkingExperience/WorkingExperience";
import { v4 as uuid } from "uuid";
const CvForm = (props) => {
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
                <EducationalExperience
                    wrapperClass={classes["control-group"]}
                    inputClass={classes["form-control"]}
                    optionalClass={classes.invalid}
                    errorClass={classes["error-text"]}
                />
                <Button>Add</Button>
                <h2>Working Experience</h2>
                <WorkingExperience
                    wrapperClass={classes["control-group"]}
                    inputClass={classes["form-control"]}
                    optionalClass={classes.invalid}
                    errorClass={classes["error-text"]}
                />
                <Button>Add</Button>
            </form>
        </Card>
    );
};
export default CvForm;
