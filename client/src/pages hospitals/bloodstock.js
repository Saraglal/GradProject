import React from "react" ;
import style from './bloodstock.module.css';
import TopBar from '.././Components/topbar/topbar';
import BloodTable from '.././Components/tables/bloodTable';

const BloodStock = () => {
    return (
        <div className= {`${style.grid}`} style={{ width: '100%' }}>
            <TopBar/>
            <BloodTable/>
        </div>
    )
}

export default BloodStock;