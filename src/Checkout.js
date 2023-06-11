import { useState } from "react";
import { useSelector } from "react-redux";
const Checkout = () => {
  const result = useSelector((state) => state);
  let arr = [0];
  result.map((item) => {
    return arr.push(item.qunty * item.price);
  });

  const [data, setData] = useState();
  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submithandler = (e) => {
    console.log(data);
  };

  return (
    <div>
      <div className="check-f">
        <h1>Select Delivery Address</h1>
        <input
          type="text"
          placeholder="Enter full Name"
          name="fname"
          onChange={(e) => changehandler(e)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Email Id"
          name="email"
          onChange={(e) => changehandler(e)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Country  Name"
          name="cntry"
          onChange={(e) => changehandler(e)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter State Name"
          name="state"
          onChange={(e) => changehandler(e)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter City Name"
          name="city"
          onChange={(e) => changehandler(e)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Pincode"
          name="pincode"
          onChange={(e) => changehandler(e)}
        />
        <br />
        <br />
      </div>
      <div className="check-s">
        <h1>Payment Details</h1>
        <input
          type="text"
          name="cname"
          placeholder="Enter Card Holder Name"
          onChange={(e) => changehandler(e)}
        />
        <br />
        <br />
        <input
          type="text"
          name="cnumber"
          placeholder="Enter Card Number"
          onChange={(e) => changehandler(e)}
        />
        <br />
        <br />
        <label>Expiry</label>
        <input type="date" onChange={(e) => changehandler(e)} name="date" />
        <br />
        <br />
        <label>CVV</label>
        <input type="password" name="cvv" onChange={(e) => changehandler(e)} />
        <br />
        <br />

        <br />
        <br />
        <button onClick={submithandler}>Place order</button>
        <h1 className="order-summary-values">
          Total ${arr.reduce((acc, item) => acc + item)}
        </h1>
      </div>
    </div>
  );
};
export default Checkout;
