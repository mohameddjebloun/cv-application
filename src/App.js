import React, { useRef, useState } from "react";
import GeneratedCv from "./components/GeneratedCv/GeneratedCv";
import CvForm from "./components/CvForm/CvForm";
import classes from "./App.module.css";
import html2canvas from "html2canvas";
function App() {
    const [fieldsData, setFieldsData] = useState({});
    const downloadCvRef = useRef();
    const handleDownloadCv = async () => {
        const element = downloadCvRef.current;
        const canvas = await html2canvas(element);

        const data = canvas.toDataURL("image/png");
        const link = document.createElement("a");

        if (typeof link.download === "string") {
            link.href = data;
            link.download = "image.png";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
    };
    return (
        <div className={classes.app}>
            <CvForm
                sendDataUp={setFieldsData}
                downloadCvHandler={handleDownloadCv}
            />
            <GeneratedCv
                cvRef={downloadCvRef}
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
