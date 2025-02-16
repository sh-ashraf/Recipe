import { Link, useNavigate } from "react-router-dom";

export default function MealsCard({meal}) {
    const navigate = useNavigate();

    const handleViewRecipe = () => {
        navigate(`/mealdetails`, { state: { idMeal: meal.idMeal } });
    };
    return (
        <div className="meal text-center hover:shadow-xl group hover:scale-105 duration-300 transition-all bg-white p-8 pb-4 rounded-[35px]">
            <img src={meal.strMealThumb} className="w-full group-hover:rotate-[360deg] duration-700 transition-all rounded-full drop-shadow-xl  -translate-y-20  shadow-2xl" alt={meal.strMeal} />
            <h3 className="font-semibold -mt-12 font-Pacifico tracking-wider text-xl">{meal.strMeal.split(" ",2).join(" ")}</h3>
            <h5 className="flex justify-center items-center gap-2 text-emerald-600">
                {meal.strArea && <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path></svg>}
                {meal.strArea}
            </h5>
            <button className="text-white bg-gradient-to-r mt-4 bg-[#21ba75] hover:bg-emerald-600 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300  px-8 py-2 rounded-full">
                <button onClick={handleViewRecipe}>View Recipe</button>
            </button>
        </div>
    )
}
