import React, { useState } from "react";
import style from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

// Sidebar Icons
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { AiOutlineMenu, AiFillHome, AiFillFileAdd } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import { BsPersonFillAdd } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <AiFillHome />,
        },
        {
            path: "/requests",
            name: "Requests",
            icon: <WaterDropIcon />,
        },
        {
            path: "/add_requests",
            name: "AddRequests",
            icon: <AiFillFileAdd />,
        },
        {
            path: "/doners",
            name: "Doners",
            icon: <BiDonateBlood />,
        },
        {
            path: "/add_doners",
            name: "AddDoners",
            icon: <BsPersonFillAdd />,
        },
        {
            path: "/bloodstock",
            name: "BloodStock",
            icon: <MdDashboardCustomize />,
        },
        {
            path: "/place_analysis",
            name: "PlaceAnalysis",
            icon: <TbReportAnalytics />,
        },
    ];

    return (
        <div className={style.container}>
            <div
                style={{ width: isOpen ? "250px" : "70px" }}
                className={`${style.sidebar} ${isOpen ? style.open : ""}`}
            >
                <div className={style.top_section}>
                    <div className={style.menu}>
                        <AiOutlineMenu onClick={toggleSidebar} />
                    </div>
                </div>

                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className={style.link}
                        activeClassName={style.active}
                    >
                        <div className={style.icon}>{item.icon}</div>
                        <div
                            style={{
                                opacity: isOpen ? 1 : 0,
                                transition: "opacity 0.5s ease",
                            }}
                            className={style.link_text}
                        >
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
            <main className={`${style["main-content"]} ${isOpen ? style.open : ""}`}>
                {children}
            </main>
        </div>
    );
};

export default SideBar;
