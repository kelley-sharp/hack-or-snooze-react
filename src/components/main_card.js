import Card from "react-bootstrap/Card";
import zzz from "../z.png";

export const MainCard = ({ children }) => {
  return (
    <Card>
      <Card.Header
        style={{
          backgroundColor: "#e77f02f7",
        }}
        className="d-flex align-items-center p-2"
      >
        <div className="d-flex mr-3 justify-content-center align-items-center border border-white">
          <img alt="zzz" src={zzz} width="30" height="30" />
        </div>
        <h1 className="h5 mb-0">Hack or Snooze</h1>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};
