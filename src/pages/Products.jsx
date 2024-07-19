import { useParams, useNavigate, useResolvedPath, useLocation } from "react-router-dom";

function Products() {
    const { id } = useParams();
    const goBack = useNavigate();
    const value = useResolvedPath("").pathname;
    const value2 = useLocation()
    console.log(value);
    console.log(value2);

    return (
        <>
            <h1>Some product {id}</h1>
            <button className="btn" onClick={() => goBack(-1)}>Go back</button>
        </>
    )
}

export default Products;