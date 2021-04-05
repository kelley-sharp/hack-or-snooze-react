import Card from "react-bootstrap/Card";
import zzz from "../z.png";

export const MainCard = ({ title, children }) => {
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
      <Card.Body>
        <div
          style={{ height: 38 }}
          className="d-flex flex-column justify-content-end border-bottom"
        >
          <h2 className="h6">{title}</h2>
        </div>
        {children}
      </Card.Body>
    </Card>
  );
};
