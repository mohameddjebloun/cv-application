import React, { useState } from "react";
import GeneratedCv from "./components/GeneratedCv/GeneratedCv";
import CvForm from "./components/CvForm/CvForm";
import classes from "./App.module.css";
function App() {
    const [fieldsData, setFieldsData] = useState({});

    return (
        <div className={classes.app}>
            <CvForm sendDataUp={setFieldsData} />
            <GeneratedCv
                data={fieldsData}
                generalInfo={fieldsData.hasOwnProperty("generalInfo")}
                educationData={
                    fieldsData.hasOwnProperty("educationData") &&
                    fieldsData.educationData.length > 0
                }
                workingData={
                    fieldsData.hasOwnProperty("workingData") &&
                    fieldsData.workingData.length > 0
                }
            />
        </div>
    );
}

export default App;
