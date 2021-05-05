import { useParams } from "react-router-dom";

const Details = () => {
const params = useParams();
    return <section>
        <h1>Product Detail</h1>
        <h4>{params.productId}</h4>
    </section>
}

export default Details;