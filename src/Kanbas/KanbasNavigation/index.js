import { Link, useLocation } from "react-router-dom";
import { RiAccountCircleLine } from 'react-icons/ri';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BiBookBookmark } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';
import { FiInbox } from 'react-icons/fi';
import { RiHistoryLine } from 'react-icons/ri';
import { MdGroups2 } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import "./index.css";


function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

    const linkToIconMap = {
        Account: <RiAccountCircleLine className="wd-icon" id="accountWhite" />,
        Dashboard: <AiOutlineDashboard className="wd-icon" />,
        Courses: <BiBookBookmark className="wd-icon" />,
        Calendar: <SlCalender className="wd-icon" />,
        Inbox: <FiInbox className="wd-icon" />,
        History: <RiHistoryLine className="wd-icon" />,
        Studio: <MdGroups2 className="wd-icon" />,
        Commons: <AiOutlineArrowRight className="wd-icon" />,
        Help: <BiHelpCircle className="wd-icon" />
    };
    const { pathname } = useLocation();
    return (

        <div className="list-group custom-list-group">
            <Link className='list-group-item custom-list-item nu-icon '>
                <img className="img-fluid" src={require("./logo.png")} alt="NU Logo" />
            </Link>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={link === "Courses" ? "/Kanbas/Dashboard" : `/Kanbas/${link}`}
                    className={`list-group-item custom-list-item ${pathname.includes(link) ? "active" : ""} ${index === links.length - 1 ? "flex-grow-1" : ""} ${index === links.length}`}>
                    <div className="d-flex flex-column align-items-center">
                        <div> {linkToIconMap[link]}</div>
                        {link}
                    </div>
                </Link>
            ))}
        </div>

    );
}
export default KanbasNavigation;