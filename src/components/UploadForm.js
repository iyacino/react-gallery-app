import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useMemo } from "react";

const Preview = ({inputs}) =>{
    return(
        inputs.path && <div
            className="rounded p-1 m-5"
            style={{
                width: "30%",
                height: "300px",
                backgroundImage: `url(${inputs.path})`,
                backgroundSize: "cover",
            }}>
        </div>
    )
}

const UploadForm = ({ isVisible, handleChange, handleSubmit, inputs}) => {
    
    const idDisabled = useMemo(() => {
        return  Object.values(inputs).some(input => !input)
    }
    , [inputs])
    
    return (
      isVisible && <>
      <p className="display-6 text-center mb-3">Upload Stock Image</p>
      <div className="mb-5 d-flex align-items-center justify-content-center">
        <Preview inputs={inputs}/>
        <form className="mb-2" style={{ textAlign: "left" }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="title"
              aria-describedby="text"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input type="file" className="form-control" name="file" onChange={handleChange}/>
          </div>
          <button
            type="submit"
            className="btn btn-success float-end"
            disabled={idDisabled}
          >
            Save changes
          </button>
        </form>
      </div>
      </>
    );
  };
export default UploadForm;  