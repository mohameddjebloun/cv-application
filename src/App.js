import React, { useState } from "react";
import GeneratedCv from "./components/GeneratedCv/GeneratedCv";
import CvForm from "./components/CvForm/CvForm";
function App() {
    const [fieldsData, setFieldsData] = useState({});
    return (
        <React.Fragment>
            <CvForm sendDataUp={setFieldsData} />
            <GeneratedCv />
        </React.Fragment>
    );
}

export default App;
