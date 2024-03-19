import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainRouter from "./router/CustomRouter";

function App() {
    const BASE_URL = '/getir-clone-with-react'
    return (
      <BrowserRouter basename={BASE_URL}>
          <Routes>
              {MainRouter.map((routeProps, i) =>
                  <Route key={i} {...routeProps}/>
              )}
          </Routes>
      </BrowserRouter>
    )
}

export default App
