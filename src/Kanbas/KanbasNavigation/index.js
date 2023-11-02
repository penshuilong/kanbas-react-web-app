import React from "react";
import { Link, useLocation } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsInboxFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import {AiOutlineArrowRight} from 'react-icons/ai';
import { BiSolidHelpCircle } from "react-icons/bi";
import neulogo from "./neulogo.png";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox",
    "History", "Studio", "Commons", "Help"];

    const linksToIconMap = {
        Account: <BiUserCircle className="icon text" size='30'/>,
        Dashboard: <RiDashboard3Fill color='red' size='30'/>,
        Courses: <FaBook color='red'size='30'/>,
        Calendar: <BsFillCalendar2WeekFill color='red' size='30'/>,
        Inbox: <BsInboxFill color='red' size='30'/>,
        History: <BsFillClockFill color='red' size='30'/>,
        Studio: <BsCameraVideoFill color='red' size='30'/>,
        Commons: <AiOutlineArrowRight color='red' size='30'/>,
        Help: <BiSolidHelpCircle color='red' size='30'/>,
    };
    const { pathname } = useLocation();
    return (
        <nav className="list-group wd-nav-menu">
            <Link to="/Kanbas/">
                <img className="wd-neu-logo" src={neulogo} alt="NEU Logo"/>
            </Link>

            {links.map((link, index) => (
                <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`list-group-item ${pathname.includes(link) && "active"}`}
            >
                {linksToIconMap[link]}
                <br/>
                {link}
            </Link>
            ))}
        </nav>
    );
}
export default KanbasNavigation;