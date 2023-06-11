import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import { display, addcart, removecart } from "./State/Action-container/index";
import { useNavigate } from "react-router-dom";
const Cartdisplay = () => {
  const result = useSelector((state) => state);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  let arr = [0];
  result.map((item) => {
    return arr.push(item.qunty * item.price);
  });
  // console.log("cart", arr);
  // console.log(result);

  return (
    <div>
      <Header />
      <h1>Product Details</h1>
      <div className="table-dis">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>items</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {result.map((data, id) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>
                    <img src={data.img} />
                  </td>
                  <td>{data.title}</td>
                  <td>${data.price * data.qunty}</td>
                  <td>{data.des}</td>
                  <td>{data.qunty}</td>
                  <td>
                    <button
                      className="m-2"
                      onClick={() => dispatch(removecart(data))}
                    >
                      -
                    </button>
                    <button
                      className="m-2"
                      onClick={() => dispatch(addcart(data))}
                    >
                      +
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <h1 className="order-summary-values">
        Total ${arr.reduce((acc, item) => acc + item)}
      </h1>
      <Button onClick={() => Navigate("/checkout")}>CHECKOUT</Button>
    </div>
  );
};
export default Cartdisplay;
