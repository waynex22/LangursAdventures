import Carousel from "../Components/Carousel";
import SessionInfo from "../Components/sessionInfo";
import SessionAboutCatba from "../Components/SessionAboutCatba";
import Tour from "../Components/Tour";
import SessionColab from "../Components/SessionColab";
import Reviews from "../Components/reviews";
const home = () => {
    return (
        <>
            <div className="">
                <Carousel />
                <SessionInfo />
                <SessionAboutCatba />
                <Tour />
                <SessionColab />
                <Reviews />
            </div>
        </>
    )
}

export default home;