import React from "react";
import GeneratedCv from "./components/GeneratedCv/GeneratedCv";
import CvForm from "./components/CvForm/CvForm";
function App() {
    return (
        <React.Fragment>
            <CvForm />
            <GeneratedCv />
        </React.Fragment>
    );
}

export default App;
