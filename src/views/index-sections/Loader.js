import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner children="" style={{ width: "3rem", height: "3rem" }} />
    </div>
  );
};

export default Loader;
