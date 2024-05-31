import { Outlet } from "react-router-dom";
import Sidebar from "../components/AboutDashboard/Sidebar";


const Dashboard = () => {
    return (
        <div className="relative min-h-screen md:flex">
         
           <Sidebar></Sidebar>
            {/* outlet */}
            <div className="flex-1 md:ml-64">
               <div className="p-5">
               <Outlet></Outlet>
               </div>
            </div>
        </div>
    );
};

export default Dashboard;