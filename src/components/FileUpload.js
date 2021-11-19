import UploadedItems from "./UploadedItems";
import { useRef, useState } from "react";

export default function FileUpload(props) {
  const fileRef = useRef(null);
  const [filesList, setFilesList] = useState([]);

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...filesList, newFile];
      setFilesList(updatedList);
    }
  };

  const removeFile = (file) => {
    const updatedList = [...filesList];
    updatedList.splice(filesList.indexOf(file), 1);
    setFilesList(updatedList);
  };

  const onDragEnter = () => fileRef.current.classList.add("drag-over");

  const onDragLeave = () => fileRef.current.classList.remove("drag-over");

  const onDrop = () => fileRef.current.classList.remove("drag-over");

  return (
    <div className="upload-card">
      <h6 className="u-flex-center u-letter-space-2 font-weight-bold">
        UPLOAD FILE
      </h6>

      {filesList.length > 0 && (
        <div className="mt-5 px-lg-1">
          {filesList.map((item, index) => (
            <UploadedItems key={index} item={item} removeFile={removeFile} />
          ))}
        </div>
      )}

      <div
        className="drop-area text-center mt-4 u-letter-space-2"
        ref={fileRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <p>DRAG FILE HERE</p>
        <p>
          OR <span className="text-primary">BROWSE</span>
        </p>
        <input type="file" val="" onChange={onFileDrop} title="" />
      </div>
    </div>
  );
}
