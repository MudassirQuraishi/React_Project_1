const ProductList = (props) => {
    const deleteProduct = (event) => {
        const target = event.target.parentElement;
        const parentElement = target.parentElement;
        parentElement.removeChild(target);
        props.onDelete({
            price: event.target.parentElement.value,
            id: event.target.parentElement.id,
        });
        console.log(event.target.parentElement);
    };
    return (
        <ul>
            {props.products.map((product) => (
                <li key={product.id} value={product.price} id={product.id}>
                    {product.name} {product.price}
                    <button onClick={deleteProduct}>Delete Product</button>
                </li>
            ))}
        </ul>
    );
};
export default ProductList;
