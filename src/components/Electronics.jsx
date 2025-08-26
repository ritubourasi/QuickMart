import { useState } from "react";
import "./Style.css";
import products from "./products";
import NavBar from "./NavBar";

const unique = [
  ...new Set(
    products.map((el) => {
      return el.category;
    })
  ),
  "All",
];

const Electronics = () => {
  const [Data, setMenu] = useState(products);
  const [menulist] = useState(unique);

  const filteritem = (category) => {
    if (category === "All") {
      setMenu(products);
      return;
    }
    const updatedlist = products.filter((el) => {
      return el.category === category;
    });
    setMenu(updatedlist);
  };

  return (
    <>
      <NavBar filteritem={filteritem} menulist={menulist} />

      <section className="main-card--container">
        {Data.map((el) => {
          return (
            <div className="card-container" key={el.id}>
              <div className="card">
                <img src={el.images} alt={el.name} className="card-img" />
                <span className="card-number card-circle ">{el.id}</span>
                <span className="card-author ">{el.category}</span>
                <h2 className="card-title">{el.name}</h2>
                <span className="card-description ">{el.description}</span>
                <h3 className="card-price">₹{el.price}</h3>
                <div className="card-read">Read More</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Electronics;
