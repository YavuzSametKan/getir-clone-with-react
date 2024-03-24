import Getir from "../pages/Getir/Getir";
import GetirYemek from "../pages/GetirYemek/GetirYemek";

const MainRouter = [
    {
        path: '/',
        element: <Getir/>
    },
    {
        path: '/yemek',
        element: <GetirYemek/>
    }
]

export default MainRouter