import Getir from "../pages/Getir/Getir";
import GetirYemek from "../pages/GetirYemek/GetirYemek";
import GetirBuyuk from "../pages/GetirBuyuk/GetirBuyuk";
import GetirSu from "../pages/GetirSu/GetirSu";
import GetirCarsi from "../pages/GetirCarsi/GetirCarsi";

const MainRouter = [
    {
        path: '/',
        element: <Getir/>
    },
    {
        path: '/yemek',
        element: <GetirYemek/>
    },
    {
        path: '/buyuk',
        element: <GetirBuyuk/>
    },
    {
        path: '/su',
        element: <GetirSu/>
    },
    {
        path: '/carsi',
        element: <GetirCarsi/>
    }
]

export default MainRouter