import MainPage from "../components/MainPage"
import ItemOneScreenInfo from "../components/ItemOneScreenInfo"
import ItemOneScreenInfo2 from "../components/ItemOneScreenInfo2"
import Planets from "../components/Planets"
import About from "../components/About"
import Values from "../components/Values"
import Robot from "../components/Robot"
import Project from "../components/Project"

export const routes = [
    {path: '/', element: <MainPage/>},
    {path: '/item2/:item_id', element: <ItemOneScreenInfo/>},
    {path: '/item3/:item_id', element: <ItemOneScreenInfo2/>},
    {path: '/models', element: <Planets/>},
    {path: '/about', element: <About/>},
    {path: '/values', element: <Values/>},
    {path: '/robot', element: <Robot/>},
    {path: '/project', element: <Project/>},
]