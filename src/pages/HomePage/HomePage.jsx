import "./HomePage.css"
import SelectedWorks from "../../components/SelectedWorks/SelectedWorks";
import HelpBrands from "../../components/HelpingBrands/HelpBrands";
import HomePageSlider from "../../components/HomePageSlider/HomePageSlider";
import HomePageAwards from "../../components/HomePageAwards/HomePageAwards";
import HomePageInsights from "../../components/HomePageInsights/HomePageInsights";
import HomePageeButton from "../../components/HomePageeButton/HomePageeButton";
import circle1 from "../../assets/images/circle1.svg"
import circle2 from "../../assets/images/circle2.svg"


function HomePage() {
    return <div className="homepage">
        <div className="HomePG">
        <div className="hello">Hello I`m Emin Mammadov</div>
        <div className="creating">Creating impactful experiences on visual design</div>
        <div className="letstalkbtn_text">
            <HomePageeButton/>
            <div className="letstalktext">I transform ideas into impactful digital experiences, delivering innovative solutions that elevate brands and captivate audiences around the world.</div>
        </div>
        <div className="first_BG">
            <img src={circle1} alt="" />
            <img src={circle2} alt="" />
        </div>
        </div>
        <SelectedWorks/>
        <HelpBrands/>
        <HomePageSlider/>
        <HomePageAwards/>
        <HomePageInsights/>
    </div>
}

export default HomePage;