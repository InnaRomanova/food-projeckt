import { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { getFilterCategories } from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const goBack = useNavigate();

    useEffect(() => {
        getFilterCategories(name).then(data => setMeals(data.meals));
    }, [name])

    return (
        <>
         <button className="btn" onClick={() => goBack(-1)}>Go back</button>
        {!meals.length ? <Preloader /> : <MealList meals={meals}/>}
        </>
    )
}

export default Category;