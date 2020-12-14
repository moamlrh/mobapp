import React from "react";
import "./Pricing.css";

const cartsArray = [
  {
    id: 1,
    title: "PERSONAL",
    price: "$14/m",
    props1: "10 Projects",
    props2: "5 GB Storage",
    props3: "Basic Support",
    props4: "Collaboration",
    props5: "Reports and analytics",
  },
  {
    id: 2,
    title: " FOR TEAMS ",
    price: "$29/m",
    props1: "Unlimited Projects",
    props2: "100 GB Storage",
    props3: "Priority Support",
    props4: "Collaboration",
    props5: "Reports and analytics",
  },
  {
    id: 3,
    title: "ENTERPRISE",
    price: "$249/m",
    props1: "Unlimited Projects",
    props2: "Unlimited Storage",
    props3: "Basic Support",
    props4: "Collaboration",
    props5: "Web hooks",
  },
];

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="title">
        <span>PRICING</span>
        <h2>Upgrade to Pro</h2>
      </div>
      <div className="carts">
        {cartsArray.map((item, i) => (
          <div className={`cart ${item.id === 2 && "active-cart"}`}>
            <span>{item.title}</span>
            <h1>{item.price}</h1>
            <h4>{item.props1}</h4>
            <h4>{item.props2}</h4>
            <h4>{item.props3}</h4>
            <h4 className={item.id === 1 && "not-allowed"}>{item.props4}</h4>
            <h4 className={item.id === 1 && "not-allowed"}>{item.props5}</h4>
            <button>CHOOSE THIS PLAN</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
