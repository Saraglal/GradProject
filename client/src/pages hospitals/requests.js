import React from "react" ;
import TopBar from '../Components/topbar/topbar';
import RequestsTable from '../Components/tables/requestable';

const Requests = () => {
    return (
        <div>
            <TopBar/>
            <RequestsTable/>
        </div>
    )
}

export default Requests;