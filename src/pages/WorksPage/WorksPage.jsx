import WorksPageCategories from "../../components/WorksPageCategories/WorksPageCategories";
import "./WorksPage.css"

function WorksPage() {
    return <div className="workspage">
        <div className="wptitle">
            <div className="wptitle1">Showcasing innovation</div>
            <div className="wptitle2container">
                <div className="wptitleline"></div>
                <div className="wptitle2">and expertise</div>
            </div>
        </div>
            <WorksPageCategories/>
    </div>
}

export default WorksPage;