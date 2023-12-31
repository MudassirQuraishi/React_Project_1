import Card from "../../UI/Card";
import Data from "./Data";
import ProductList from "./ProductList";

const Dashboard = (props) => {
    const deleteHandler = (data) => {
        props.onDelete(data);
    };
    return (
        <>
            <h1>product</h1>
            <Data value={props.totalPrice} />
            <Card>
                <ProductList
                    products={props.products}
                    onDelete={deleteHandler}
                />
            </Card>
        </>
    );
};
export default Dashboard;
