import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./WorksPageCategories.css"
import WorksPageLWork from '../WorksPageLWork/WorksPageLWork';
import {works} from '../DataBase/DataBase';

function WorksPageCategories() {

    const [query, setQuery] = useState("all");




    return (
        <div className='wpCategoriesContainer'>
            <div className='wpCategories'>
                <Link onClick={() => setQuery("all")} style={query == "all" ? {color:"white"} : {color: "#a6abb44e"}}>All</Link>
                <div className='tendency'>/</div>
                <Link onClick={() => setQuery("branding")} style={query == "branding" ? {color:"white"} : {color: "#a6abb44e"}}>Branding</Link>
                <div className='tendency'>/</div>
                <Link onClick={() => setQuery("webdesign")} style={query == "webdesign" ? {color:"white"} : {color: "#a6abb44e"}}>UI/UX</Link>
                <div className='tendency'>/</div>
                <Link onClick={() => setQuery("posts")} style={query == "posts" ? {color:"white"} : {color: "#a6abb44e"}}>Ads Posts</Link>
            </div>
            < div className='wpPosts'>
                {
                    works.filter(work => query === "all" ? true : work.key === query).map(work => <WorksPageLWork data={work} />)
                }
            </div>
        </div>
    )
}

export default WorksPageCategories;