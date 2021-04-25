import Spinner from "react-bootstrap/Spinner";

export const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <Spinner animation="border" variant="dark" />
    </div>
  );
};
