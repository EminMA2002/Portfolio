import "./HomePage.css"
import SelectedWorks from "../../components/SelectedWorks/SelectedWorks";
import { HiArrowSmallRight } from "react-icons/hi2";
import HelpBrands from "../../components/HelpingBrands/HelpBrands";
import HomePageSlider from "../../components/HomePageSlider/HomePageSlider";
import HomePageAwards from "../../components/HomePageAwards/HomePageAwards";
import HomePageInsights from "../../components/HomePageInsights/HomePageInsights";
import HomePageFooter from "../../components/HomePageFooter/HomePageFooter";

function HomePage() {
    return <div className="homepage">
        <div className="HomePG">
        <div className="hello">Hello I`m Emin Mammadov</div>
        <div className="creating">Creating impactful<br />experiences on visual design</div>
        <div className="letstalkbtn_text">
            <button className="letstalkbtn">Let`s Talk! <HiArrowSmallRight /></button>
            <div className="letstalktext">I transform ideas into impactful digital experiences, delivering innovative solutions that elevate brands and captivate audiences around the world.</div>
        </div>
        </div>
        <SelectedWorks/>
        <HelpBrands/>
        <HomePageSlider/>
        <HomePageAwards/>
        <HomePageInsights/>
        <HomePageFooter/>
    </div>
}

export default HomePage;