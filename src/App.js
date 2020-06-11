import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header.jsx';
import items from './components/Api';
import Product from './components/Product';
import Cart from './components/Cart.jsx';
import CheckoutForm from './components/CheckoutForm';
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderPix from './components/HeaderPix';


function App() {

  const [itemsInCart, setItemsInCart] = useState([]);

  const handleAddToCartClick = id => {
    setItemsInCart(itemsInCart => {
      const itemInCart = itemsInCart.find(item => item.id === id);

      //if item is already in cart update quantity
      if (itemInCart) {
        return itemsInCart.map(item => {
          if (item.id !== id) return item;
          return { ...itemInCart, quantity: item.quantity + 1 };
        });
      }

      const item = items.find(item => item.id === id);
      return [...itemsInCart, { ...item, quantity: 1 }];
    });
  };
  const totalCost = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );

  return (
    <>

      <div className="App">
        <div className="container">

          <Header />
          <HeaderPix />
          <Cart itemsInCart={itemsInCart} totalCost={totalCost} />
          <hr ></hr>
          <Navigation />

          <main className="all-center">
            <div className="all-center">
              <div style={productStyle}>
                {items.map(item => (
                  <Product
                    key={item.title}
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    serialNumber={item.serialNumber}
                    Description={item.Description}
                    Manufacturer={item.Manufacturer}
                    Category={item.Category}
                    image={item.image}
                    onAddToCartClick={() => handleAddToCartClick(item.id)}

                  />
                ))}
              </div>
            </div>

          </main>

          <Footer />
        </div>

      </div>

    </>
  );
};
const productStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gridGap: "1rem",
};

export default App;
