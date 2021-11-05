import { useField } from "formik";
import Dropzone from "react-dropzone";

interface DropzoneFieldProps {
  name: string;
  accept?: "ImageOnly" | "PdfOnly";
  disabled?: boolean;
  className?: string;
}

export const DropzoneField = (props: DropzoneFieldProps) => {
  const [, , { setValue }] = useField({ name: props.name });

  return (
    <Dropzone
      disabled={props.disabled}
      noClick
      accept={
        props.accept === "ImageOnly"
          ? "image/*"
          : props.accept === "PdfOnly"
          ? "application/pdf"
          : ""
      }
      onDrop={(acceptedFiles: File[]) => {
        if (acceptedFiles.length === 0) {
          return;
        }
        setValue(acceptedFiles);
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles, open }) => (
        <section className={props.className}>
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here</p>
            <button
              disabled={props.disabled}
              type="button"
              onClick={open}
              className="button dialog"
            >
              Open File Dialog
            </button>
          </div>
          <div>
            {acceptedFiles.length > 0 && <h4>Files</h4>}
            <ul>
              {acceptedFiles.map((f) => (
                <li key={f.name}>
                  <p>{f.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
