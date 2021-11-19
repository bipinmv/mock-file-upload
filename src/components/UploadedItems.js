import { fileIcons } from "../utility/utility";
import { ProgressBar } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function UploadedItems({ index, item, removeFile }) {
  const [progressVal, setProgressVal] = useState(1);
  const fileName = item.name?.split("_").join("-");

  // for progress-bar animation
  const printNumbersAfterInterval = (n) => {
    for (let i = 1; i <= n; i++) {
      setTimeout(() => {
        setProgressVal(i);
      }, i * 20);
    }
  };

  useEffect(() => {
    printNumbersAfterInterval(100);
  }, []);

  return (
    <div key={index} className="d-flex align-items-center py-2">
      <img
        src={fileIcons[item.type.split("/")[1]] ?? fileIcons["default"]}
        alt=""
        width="30px"
        className={progressVal < 100 ? "u-medium-opacity" : ""}
      />
      <div className="px-3 px-lg-5 w-100">
        <span
          className={
            progressVal < 100 ? "u-medium-opacity file-name" : "file-name"
          }
        >
          {fileName}
        </span>
        <ProgressBar
          variant={progressVal < 100 ? "danger" : "success"}
          now={progressVal}
        />
      </div>
      {progressVal < 100 ? (
        <img
          className="ml-auto cursor-pointer"
          src={fileIcons.close}
          alt=""
          onClick={() => removeFile(item)}
          width="25px"
          title="Cancel"
        />
      ) : (
        <img className="ml-auto" src={fileIcons.check} alt="" width="25px" />
      )}
    </div>
  );
}
