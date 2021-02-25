import React, { useState } from "react";
import "./style.css";
function ProductCard(props) {
  return (
    <div>
      <p>{props.id}</p>
      <h1>{props.name} </h1>
      <img src={props.image} />
      <h1>{props.price}</h1>
      <h1>{props.description}</h1>
    </div>
  );
}

export default function App() {
  let [items, setItems] = useState("");
  let [total, setTotal] = useState(0);
  let [cart, setCart] = useState("");
  let [newProduct, setNewProduct] = useState("");
  function addProductToCart(product, price) {
    let products = cart;
    products += product + ", ";
    setCart(products);
    setTotal(total + price);
    console.log(cart);
  }
  function clearCart() {
    setTotal(0);
    setCart("");
  }

  function addIteme(event) {
    event.preventDefault();
    setItems(newProduct);
  }
  return (
    <div>
      <form>
        <input
          placeholder="Add a New Product"
          value={newProduct}
          onChange={event => setNewProduct(event.value)}
        />
        <button onClick={event => addItems(event)}> add product </button>
      </form>
      <h1>Total = {total}</h1>
      <h2>Cart : {cart}</h2>
      <button onClick={() => clearCart()}>Remove all Items </button>
      {items}
      <ProductCard
        id="1"
        name="Pizza"
        price="$1.50"
        image="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk"
        description="Dough baked with tomato sauce , cheese,  and pepperoni."
      />
      <button onClick={() => addProductToCart("Pizza", 1.5)}>
        Add to Cart
      </button>

      <ProductCard
        id="2"
        name="Coffee"
        price="$2.50"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXX9ZFy_phkiDpZDzg7md0eXIfUHwmqkAKg&usqp=CAU"
        description=""
      />
      <button onClick={() => addProductToCart("Coffee", 1.0)}>
        Add to Cart
      </button>
      <ProductCard
        id="3"
        name="Pasta"
        price="$5.00"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZCciLeOCaMZvZB6n1qcIwRgUlKPzth2Pig&usqp=CAU"
      />
      <button onClick={() => addProductToCart("Pasta", 3.0)}>
        Add to Cart
      </button>

      <p>Start editing to see some magic happen :) </p>
    </div>
  );
}
