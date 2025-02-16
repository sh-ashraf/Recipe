import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Options from "./Options";
import Tabs from "./Tabs";
import MealsCard from "./MealsCard";
import Loading from "./Loading";

export default function Meals() {
    const [mealsArr,setMealsArr] = useState([]);
    const [categoriesArr,setCategoriesArr] = useState([]);
    const [loading,setLoading] = useState(false);
    const [errMsg,setErrMsg] = useState('');
    const [category,setCategory] = useState(localStorage.getItem('selectedCategory') || '');

    function getstrCategory(e){
        const selectedCategory = e.target.value ? e.target.value : e.target.textContent;
        const finalCategory = selectedCategory === 'All' ? '' : selectedCategory;
        setCategory(finalCategory);
        localStorage.setItem('selectedCategory', finalCategory);
    }


    async function getCategories(){
        try {
            let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
            setCategoriesArr(data.meals);
            setErrMsg('');
            setLoading(true);
        } catch (error) {
            setErrMsg(error.message);
            setLoading(false);
        }
    }

    async function getMeals(category){
        try {
            let {data} = await axios.get(category ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}` : `https://www.themealdb.com/api/json/v1/1/search.php?s=`);
            setMealsArr(data.meals || []);
            setErrMsg('');
            setLoading(true);
        } catch (error) {
            setErrMsg(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        getCategories();
    }, []);
    useEffect(()=>{
        getMeals(category);
    },[category])
    
    return (
        <div className="p-4 overflow-hidden sm:ml-64 min-h-screen">
            <div className="px-0 py-8">
                <h1 className="text-4xl font-bold  bg-gradient-to-r from-[#F29724]   via-[#ca1023c4] to-[#c90519]  bg-clip-text text-transparent">Learn, Cook, Eat Your Food</h1>
                <div className="sm:hidden mt-8">
                    <form className="max-w-sm mx-auto">
                        <select id="meals" value={category === '' ? 'All' : category} onChange={getstrCategory} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value='All'>All</option>
                            {categoriesArr.map(cate=><Options cate={cate}></Options>)}
                        </select>
                    </form>
                </div>
                <ul className="sm:flex hidden mt-8 flex-wrap gap-4  font-medium text-center text-gray-500 border-b border-gray-200">
                    <li className="me-2">
                        <NavLink to={'/'} onClick={getstrCategory} className="inline-block catLink px-4 py-2  border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50">All</NavLink>
                    </li>
                    {categoriesArr.map(cate=><Tabs onClick={getstrCategory} cate={cate}></Tabs>)}
                </ul>
                <div className="mealsCards mt-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
                    {mealsArr.length ? mealsArr.map(meal=><MealsCard key={meal.idMeal} meal={meal}></MealsCard>) : <Loading></Loading>}
                </div>
            </div>
        </div>
    )
}
