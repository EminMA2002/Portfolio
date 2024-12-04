import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./WorksPageCategories.css"
import WorksPageLWork from '../WorksPageLWork/WorksPageLWork';
// import WorksPageBWork from '../WorksPageBWork/WorksPageBWork';

function WorksPageCategories() {
    const works = [{
        id: 1,
        image: "",
        name: "",
        tools: [
            "asdasdsad",
            "dasdadad"
        ],
        col: 1,
    }, {
        id: 1,
        image: "",
        name: "",
        tools: [ "asdasdsad",
            "dasdadad"],
        col: 2,
    }, {
        id: 1,
        image: "",
        name: "",
        tools: [],
        col: 2,
    },
    {
        id: 1,
        image: "",
        name: "",
        tools: [],
        col: 1,
        key: "frontend"
    }
    ]



    const [query, setQuery] = useState("all");




    return (
        <div className='wpCategoriesContainer'>
            <div className='wpCategories'>
                <Link onClick={() => setQuery("all")}>All</Link>
                <div className='tendency'>/</div>
                <Link onClick={() => setQuery("branding")}>Branding</Link>
                <div className='tendency'>/</div>
                <Link onClick={() => setQuery("webdesign")}>UI/UX</Link>
                <div className='tendency'>/</div>
                <Link onClick={() => setQuery("posts")}>Ads Posts</Link>
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