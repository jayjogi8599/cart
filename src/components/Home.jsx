import React from "react";
import "../styles/home.scss";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "data:image/jpeg;base64,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";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhmhL9qf77RBcGuJkmTOMfzhJ6IKLcuyCXhw&usqp=CAU";
const img3 =
  "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/b/r/g/s-cmb-po2-dab-wynk-smartees-original-imagm5vhumtz8epz.jpeg?q=70";

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 120000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 1499,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "T-Shirt Black",
      price: 399,
      imgSrc: img3,
      id: "tsjfdlaajsdbhjabhsjdfdfv",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹{price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
