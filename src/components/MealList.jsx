

function MealList({meals}) {



    return (
        <div className="list">
        {meals.map(meal => (
            <Meal key={} {...meal}/>
        ))}
        </div>
    )
}

export default MealList;