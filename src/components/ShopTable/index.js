import React, { useState, useEffect } from "react";
import { shopList } from "../../shopList";
import vexicon from "../../images/vexicon.png";
import "./index.css";

const ShopTable = () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    setShopData(shopList);
  }, []);

  return (
    <div className="container">
      <img src={vexicon} alt="" />
      <h1>BloodyShop List</h1>
      <table>
        <thead>
          <tr>
            <th style={{ width: "40px" }}>Item</th>
            <th style={{ width: "60px" }}>Image</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {shopData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.imageUrl} alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShopTable;
