import React, { useState } from "react";
import Form from "./components/Form Components/Form";
import Dashboard from "./components/Product Components/Dashboard";
function App() {
    const [productList, setProductList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const addProductHandler = (productData) => {
        setTotalPrice(parseInt(productData.price));
        setProductList((prevProductList) => {
            return [productData, ...prevProductList];
        });
        localStorage.setItem(productData.id, JSON.stringify(productData));
    };
    const changePriceHandler = (data) => {
        setTotalPrice(totalPrice - data.price);
        localStorage.removeItem(data.id);
    };

    return (
        <>
            <Form addProduct={addProductHandler} />
            <Dashboard
                products={productList}
                totalPrice={totalPrice}
                onDelete={changePriceHandler}
            />
        </>
    );
}

export default App;
// addProduct={addProductHandler}
