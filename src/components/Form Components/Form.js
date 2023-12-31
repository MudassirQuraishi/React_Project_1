import React, { useRef } from "react";
import Card from "../../UI/Card";
import classes from "./Form.module.css";
import Button from "../../UI/Button";

const Form = (props) => {
    const idRef = useRef();
    const priceRef = useRef();
    const nameRef = useRef();
    const submitForm = (event) => {
        event.preventDefault();
        const productDetails = {
            id: idRef.current.value,
            price: priceRef.current.value,
            name: nameRef.current.value,
        };
        props.addProduct(productDetails);
        idRef.current.value = "";
        priceRef.current.value = "";
        nameRef.current.value = "";
    };
    return (
        <Card className={classes.input}>
            <form onSubmit={submitForm}>
                <label htmlFor='username'>Product Id:</label>
                <input id='id' ref={idRef} placeholder='Enter Product id' />
                <label htmlFor='age'>Product Price:</label>
                <input id='price' ref={priceRef} />
                <label htmlFor='name'>Product Name:</label>
                <input id='name' ref={nameRef} />
                <Button type='submit'>Add Product</Button>
            </form>
        </Card>
    );
};
export default Form;
