import Getir from "../pages/Getir/Getir";
import GetirYemek from "../pages/GetirYemek/GetirYemek";
import GetirBuyuk from "../pages/GetirBuyuk/GetirBuyuk";
import GetirSu from "../pages/GetirSu/GetirSu";

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
    }
]

export default MainRouter