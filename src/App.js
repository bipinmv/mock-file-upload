import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import FileUpload from "./components/FileUpload";

export default function App() {
  return (
    <div className="container py-5 p-lg-5">
      <FileUpload />
    </div>
  );
}
