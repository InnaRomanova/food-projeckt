import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilterCategories } from "../api";
import Preloader from "../components/Preloader";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilterCategories(name).then(data => setMeals(data.meals));
    }, [name])

    return (
        <>
        {!meals.length ? <Preloader /> : <MealList meals={meals}/>}
        </>
    )
}

export default Category;