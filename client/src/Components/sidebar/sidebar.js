import React, { useState } from "react";
import style from "./sidebar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

// Sidebar Icons
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { AiOutlineMenu, AiFillHome, AiFillFileAdd } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import { BsPersonFillAdd } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import AddHomeWorkRoundedIcon from "@mui/icons-material/AddHomeWorkRounded";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';


const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const branchNo = localStorage.getItem("branchNo");
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const logout = () => {
        // Delete all localStorage items
        localStorage.clear();
        // Redirect to login page
        navigate("/login");
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
            path: "/AddBank",
            name: "Banks",
            icon: <AppsRoundedIcon />,
            condition: branchNo === "1", // Conditionally render based on branchNo
        },
        {
            path: "/userPrediction",
            name: "UserPrediction",
            icon: <HistoryRoundedIcon />,
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

                <div className={style.menu_items}>
                    {menuItem.map(
                        (item, index) =>
                            item.condition !== false && (
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
                                            display: isOpen ? "block" : "none",
                                            transition: "opacity 0.5s ease",
                                        }}
                                        className={style.link_text}
                                    >
                                        {item.name}
                                    </div>
                                </NavLink>
                            )
                    )}
                </div>

                <div className={style.logout} onClick={logout}
                >
                    <ExitToAppIcon />
                    <span style={{
                        opacity: isOpen ? 1 : 0,
                        display: isOpen ? "block" : "none",
                        transition: "opacity 0.5s ease",
                    }}
                          className={style.logout_text}>Logout
                    </span>
                </div>
            </div>
            <main className={`${style["main-content"]} ${isOpen ? style.open : ""}`}>
                {children}
            </main>
        </div>
    );
};

export default SideBar;
