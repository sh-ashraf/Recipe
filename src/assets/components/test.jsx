export default function Meals() {
    const [mealsArr, setMealsArr] = useState([]);
    const [categoriesArr, setCategoriesArr] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [category, setCategory] = useState(localStorage.getItem('selectedCategory') || '');
    const [activeCategory, setActiveCategory] = useState(localStorage.getItem('selectedCategory') || '');

    function getstrCategory(e) {
        const selectedCategory = e.target.value ? e.target.value : e.target.textContent;
        const finalCategory = selectedCategory === 'All' ? '' : selectedCategory;
        setCategory(finalCategory);
        setActiveCategory(finalCategory);
        localStorage.setItem('selectedCategory', finalCategory);
    }

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        getMeals(category);
    }, [category]);

    return (
        <div className="p-4 overflow-hidden sm:ml-64 min-h-screen">
            <div className="px-0 py-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-[#F29724] via-[#ca1023c4] to-[#c90519] bg-clip-text text-transparent">
                    Learn, Cook, Eat Your Food
                </h1>

                <ul className="sm:flex hidden mt-8 flex-wrap gap-4 font-medium text-center text-gray-500 border-b border-gray-200">
                    <li className="me-2">
                        <button 
                            onClick={getstrCategory} 
                            className={`inline-block catLink px-4 py-2 border transition-all hover:shadow-xl shadow duration-300 rounded-full 
                                ${activeCategory === '' ? 'bg-[#ca1023c4] text-white' : 'hover:text-gray-600 hover:bg-gray-50'}`}
                        >
                            All
                        </button>
                    </li>
                    {categoriesArr.map(cate => (
                        <Tabs key={cate.strCategory} onClick={getstrCategory} cate={cate} activeCategory={activeCategory} />
                    ))}
                </ul>

                <div className="mealsCards mt-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
                    {mealsArr.length ? mealsArr.map(meal => <MealsCard key={meal.idMeal} meal={meal} />) : <Loading />}
                </div>
            </div>
        </div>
    );
}
