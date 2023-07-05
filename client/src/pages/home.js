import React from "react";
import style from './home.module.css';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TopBar from '.././Components/topbar/topbar';
import DonationChart from '../Components/graphs/barGraph';
import LineChart from '../Components/graphs/lineGraph';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import jwt from 'jsonwebtoken';


const Home = () => {
    const donationData = [
        { year: 2023, amount: 100 },
        { year: 2022, amount: 200 },
        { year: 2021, amount: 300 },
        { year: 2020, amount: 150 },
        { year: 2019, amount: 200 },
        { year: 2018, amount: 500 },
    ];

    const token = localStorage.getItem('token');
    let branchTypeName = null;
    let branchNo = null;

    if (token) {
        try {
            const decodedToken = jwt.decode(token);
            branchTypeName = decodedToken && decodedToken.branchTypeName ? decodedToken.branchTypeName : null;
            branchNo = decodedToken && decodedToken.BranchNo ? decodedToken.BranchNo : null;
            localStorage.setItem('branchTypeName', branchTypeName);
            localStorage.setItem('branchNo', branchNo);
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }

    const lineData = [
        { year: 2018, collected: 100, stock: 50 },
        { year: 2019, collected: 250, stock: 100 },
        { year: 2020, collected: 500, stock: 150 },
        { year: 2021, collected: 100, stock: 50 },
        { year: 2022, collected: 200, stock: 300 },
        { year: 2023, collected: 300, stock: 150 },
    ];

    return (
        <div className={style.container}>
            <TopBar />

            <div className={style.row}>
                <div className={style.analysisBox}>
                    <Card>
                        <CardContent>
                            <VolunteerActivismIcon />
                                <h3>{branchTypeName}</h3>
                            <p>{branchNo}</p>
                        </CardContent>
                    </Card>
                </div>
                <div className={style.analysisBox}>
                    <Card>
                        <CardContent>
                            <VolunteerActivismIcon />
                            <h3>Analysis Box 2</h3>
                            <p>Some analysis description</p>
                        </CardContent>
                    </Card>
                </div>
                <div className={style.analysisBox}>
                    <Card>
                        <CardContent>
                            <VolunteerActivismIcon />
                            <h3>Analysis Box 3</h3>
                            <p>Some analysis description</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.analysisBox}>
                    <Card>
                        <CardContent>
                            <LocationOnIcon />
                            <h3>Analysis Box 4</h3>
                            <p>Some analysis description</p>
                        </CardContent>
                    </Card>
                </div>
                <div className={style.analysisBox}>
                    <Card>
                        <CardContent>
                            <LocationOnIcon />
                            <h3>Analysis Box 5</h3>
                            <p>Some analysis description</p>
                        </CardContent>
                    </Card>
                </div>
                <div className={style.analysisBox}>
                    <Card>
                        <CardContent>
                            <TaskAltIcon />
                            <h3>Analysis Box 6</h3>
                            <p>Some analysis description</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className={style.chartContainer}>
                <div className={style.chartWrapper}>
                    <DonationChart donationData={donationData} />
                </div>
                <div className={style.chartWrapper}>
                    <LineChart lineData={lineData} />
                </div>
            </div>
        </div>
    );
}

export default Home;
