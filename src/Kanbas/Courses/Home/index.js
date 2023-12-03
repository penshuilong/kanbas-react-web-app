import ModuleList from "../Modules/ModuleList";
import {FaFileImport} from 'react-icons/fa';
import {FaRegCompass} from 'react-icons/fa';
import {FiTarget} from 'react-icons/fi';
import {AiOutlineBarChart} from 'react-icons/ai';
import {AiFillNotification} from 'react-icons/ai';
import {IoMdNotificationsOutline} from 'react-icons/io';
import "./index.css";
function Home() {
    return (
        <div className="row">
            <div className="col-9">
                <ModuleList />
            </div>
            <div className="col-3">
                <h3>Course Status</h3>
                <ul className="list-group">
                    <li className="list-group-item"><FaFileImport className="me-2"/>Import Existing Content</li>
                    <li className="list-group-item"><FaRegCompass className="me-2"/>Import From Commons</li>
                    <li className="list-group-item"><FiTarget className="me-2"/>Choose Home Page</li>
                    <li className="list-group-item"><AiOutlineBarChart className="me-2"/>View Course Stream</li>
                    <li className="list-group-item"><AiFillNotification className="me-2"/>New Announcements</li>
                    <li className="list-group-item"><AiOutlineBarChart className="me-2"/>New Analytics</li>
                    <li className="list-group-item"><IoMdNotificationsOutline className="me-2"/>View Course Notifications</li>
                </ul>

                <h3 className="mt-4">Comming Up</h3>
                <ul className="list-group custom-list-group-status">
                    <li className="list-group-item"><p className="wd-color-r">Lecture CS4450.123.234.345</p><text className="wd-color-g">Sep 7 at 11:45am</text></li>
                    <li className="list-group-item"><p className="wd-color-r">Lecture CS4450.456.45.34.467</p><text className="wd-color-g">Sep 7 at 11:45am</text></li>
                    </ul>
            </div>
        </div>
    );
}
export default Home;