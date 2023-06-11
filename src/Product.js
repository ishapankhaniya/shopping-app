import Header from "./Header";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Cart1 from "./Cart";

import { useNavigate } from "react-router-dom";
import { display, addcart, removecart } from "./State/Action-container/index";

const Product = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  // usestate data
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/product").then((result) => {
      result.json().then((res) => {
        setResult(res);
      });
    });
  }, []);

  return (
    <div>
      <Header />
      <Cart1 />
      <h1 className="text mt-5">Products</h1>
      <br />

      <div className="row row-cols-1 row-cols-md-6">
        {result.map((post, id) => {
          return (
            <div className="col mb-4">
              <div className="card" key={id}>
                <span key={post.id}></span>
                <img
                  src={post.img}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "250px" }}
                />
                <button
                  onClick={() => {
                    Navigate("/viewdetails", { state: { post: post } });
                  }}
                >
                  view
                </button>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">${post.price}</p>

                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(display(post))}
                  >
                    ADD CART
                  </button>
                  {/* {console.log(post.title)} */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Product;
