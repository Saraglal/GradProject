import React, { useState } from "react";
import style from'./sidebar.module.css';
import { NavLink } from "react-router-dom";

//Sidebar Icons
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import {
    AiOutlineMenu,
    AiFillHome,
    AiFillFileAdd,
} from "react-icons/ai"
import {MdDashboardCustomize,} from "react-icons/md"
import {BiDonateBlood,} from "react-icons/bi"
import {BsPersonFillAdd,} from "react-icons/bs"
import {TbReportAnalytics,} from "react-icons/tb"


const SideBar = ({children}) => {
    //navigate functions between pages
    const [isOpen ,setIsOpen] = useState(false);
    const Toggle= () => setIsOpen(!isOpen);
    //sidebar pages
    const menuItem =[
        {
            path:"/",
            name:"Home" ,
            icon:<AiFillHome/>
        },
        {
            path:"/requests",
            name:"Requests" ,
            icon:<WaterDropIcon/>
        },
        {
            path:"/add_requests",
            name:"AddRequests" ,
            icon:<AiFillFileAdd/>
        },
        {
            path:"/doners",
            name:"Doners" ,
            icon:<BiDonateBlood/>
        },
        {
            path:"/add_doners",
            name:"AddDoners" ,
            icon:<BsPersonFillAdd/>
        },
        {
            path:"/bloodstock",
            name:"BloodStock" ,
            icon:<MdDashboardCustomize/>
        },
        {
            path:"/place_analysis",
            name:"PlaceAnalysis" ,
            icon:<TbReportAnalytics/>
        },
    ]

    return (
        <div className= {`${style.container}`}>
            <div style={{width: isOpen? "250px" : "70px"}} className= {`${style.sidebar}`}>
                {/*}Toggle button and if we want to put logo put it in top section{*/}
                <div className= {`${style.top_section}`}>
                    <div  className= {`${style.menu}`}>
                        <AiOutlineMenu onClick={Toggle}/>
                    </div>
                </div>
                    {
                        menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className= {`${style.link}`} activeClassName= {`${style.active}`}>
                                <div className= {`${style.icon}`}> {item.icon}</div>
                                <div style={{display: isOpen? "block" : "none"}} className= {`${style.link_text}`}> {item.name}</div>
                            </NavLink>
                        ))
                    }
            </div>
            <main>
                    {children}
            </main>
        </div>

    )
}

export default SideBar;