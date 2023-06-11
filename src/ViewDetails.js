import { Button } from "react-bootstrap";

import Header from "./Header";
import { useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Actioncontainer } from "./State/index";
import { useDispatch } from "react-redux";
const ViewDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  console.log("location", location);
  // console.log("amount", amount);

  const actions = bindActionCreators(Actioncontainer, dispatch);

  return (
    <div>
      <Header />
      <div className="view-data">
        <br />
        <h1>hello</h1>
        <h1>View Details</h1>

        <img src={location.state.post.img} className="img-f" alt="img" />
        <br />
        <div className="des-data">
          <h4>Name Of Product: {location.state.post.title}</h4>
          {/* <h4>Cart Data</h4> */}
          <h4> Price: ${location.state.post.price}</h4>
          <h4>Description: {location.state.post.des}</h4>
        </div>
        <div className="des-q">
          <Button
            className="btn btn-secondary bt-q"
            value="-"
            onClick={() => actions.addcart()}
          >
            -
          </Button>
          <label className="lbl-q"> Quantity</label>
          <Button
            className="btn btn-secondary bt-q"
            value="+"
            onClick={() => actions.removecart()}
          >
            +
          </Button>
        </div>

        <Button className="btn btn-secondary b-data">ADD CART</Button>

        <br />
        <br />
      </div>
    </div>
  );
};

export default ViewDetails;
