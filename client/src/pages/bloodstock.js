import * as React from "react" ;
import TopBar from '.././Components/topbar/topbar';
import BloodTable from '.././Components/tables/bloodTable';
import SlideBarBlood from '.././Components/slidebar/slidebuttonbarBlood';

const BloodStock = () => {
    return (
        <div  style={{ width: '100%' }}>
            <TopBar/>
            <SlideBarBlood/>
            <BloodTable/>
        </div>
    )
}

export default BloodStock;