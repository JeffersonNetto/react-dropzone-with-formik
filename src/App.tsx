import { Form, Formik } from "formik";
import "./styles.css";
import { DropzoneField } from "./DropzoneField";

export default function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ files: [] } as { files: File[] }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <DropzoneField
            name="files"
            accept="PdfOnly"
            className="dropzone-field"
          />
          <button type="submit" className="button submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
