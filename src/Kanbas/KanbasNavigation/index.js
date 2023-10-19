import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsInboxFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import {AiOutlineArrowRight} from 'react-icons/ai';
import { BiSolidHelpCircle } from "react-icons/bi";
import neulogo from '../../images/neulogo.png'
import "./index.css";
function KanbasNavigation() {

  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-accounticon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BsInboxFill className="wd-icon" />,
    History: <BsFillClockFill className="wd-icon" />,
    Studio: <BsCameraVideoFill className="wd-icon" />,
    Commons: <AiOutlineArrowRight className="wd-icon"/>,
    Help: <BiSolidHelpCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 80 }}>
      <Link to="/Kanbas/Dashboard">
        <img
        src={neulogo}
        alt=''
        style={ { width: "100%" , height: "100%" }}
        />
      </Link> 
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
