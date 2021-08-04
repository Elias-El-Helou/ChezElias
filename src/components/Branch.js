import "./Branch.css";
import Button from "./Button";
const Branch = (props) => {
  return (
    <div className="div">
      <span className="branch">{props.name} </span>
      <span className="address">||Address: {props.address}||</span>
      <br /> <br />
      <Button />
      
    </div>
  );
};
export default Branch;
