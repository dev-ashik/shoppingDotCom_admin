import React from "react";
import "./NewProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label>Image</label>
          <input type="file" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="newProductItem">
          <label>Active</label>
          <select className="newProductSelcet" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newProductItem">
          <button className="newProductButton">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
