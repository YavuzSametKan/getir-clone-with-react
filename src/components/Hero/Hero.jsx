import React, {useState} from "react"
import Carousel from "./Carousel/Carousel"
import HeroContainer from "./HeroContainer"
import Brand from "./Brand/Brand"
import LoginForm from "./LoginForm/LoginForm"

function Hero() {
    const [selected, setSelected] = useState("TR");
    return (
        <main>
            <Carousel/>
            <HeroContainer>
                <Brand/>
                <LoginForm selected={selected} setSelected={setSelected}/>
            </HeroContainer>
        </main>
    )
}

export default Hero