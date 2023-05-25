import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import styles from './App.css';
import Login from './Components/login/login';
import SideBar from './Components/sidebar/sidebar';
import Home from './pages/home';
import Doners from './pages/doners';
import Requests from './pages/requests';
import AddDoners from './pages/add_doners';
import AddRequests from './pages/add_requests';
import BloodStock from './pages/bloodstock';
import PlaceAnalysis from './pages/place_analysis';
import DonerFile from './Components/tables/doner_profile';
import RequestFile from './Components/tables/request_file';
import Approval from './pages/approval';

const MainContent = () => {
    const location = useLocation();
    const showSidebar = location.pathname !== '/login';

    return (
        <div>
            {showSidebar && <SideBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doners" element={<Doners />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/add_doners" element={<AddDoners />} />
                <Route path="/add_requests" element={<AddRequests />} />
                <Route path="/bloodstock" element={<BloodStock />} />
                <Route path="/place_analysis" element={<PlaceAnalysis />} />
                <Route path="/doner_profile" element={<DonerFile />} />
                <Route path="/request_file" element={<RequestFile />} />
                <Route path="/approval" element={<Approval />} />
            </Routes>
            </SideBar>}
        </div>
    );
};

const App = () => {
    return (
        <div className={styles.App}>
            <header>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/*" element={<MainContent />} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
};

export default App;
