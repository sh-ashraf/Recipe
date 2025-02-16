import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './assets/components/Layout.jsx';
import Meals from './assets/components/Meals.jsx';
import Area from './assets/components/Area.jsx'
import Ingredients from './assets/components/Ingredients.jsx'
import MealDetails from "./assets/components/MealDetails.jsx";

export default function App() {
  const routes = createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
      {index:true,element:<Meals></Meals>},
      {path:'/mealdetails',element:<MealDetails></MealDetails>},
      {path:'/area',element:<Area></Area>},
      {path:'/ingredients',element:<Ingredients></Ingredients>},
    ]}
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}
