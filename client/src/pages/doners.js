import React, { useState, useEffect } from "react";
import style from './doners.module.css';
import TopBar from '.././Components/topbar/topbar';
import DonersTable from '.././Components/tables/donerstable';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';


const Doners = () => {
    const [searchText, setSearchText] = useState("");
    const [initialData, setInitialData] = useState([]);
    const [rows, setRows] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null); // Updated state and removed array destructuring
    const branchNo = localStorage.getItem("branchNo");

    useEffect(() => {

        // Fetch data from the API endpoint
        fetch("http://localhost:3000/transaction/getTransactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ TransTypeId: 1, branchNo }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Process the received data and update the rows state
                const processedRows = data.map((transaction) => {
                    const transDate = new Date(transaction.TransDate).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    });
                    const today = new Date();
                    const birthDateObj = new Date(transaction.BirthDate);
                    let age = today.getFullYear() - birthDateObj.getFullYear();
                    const monthDiff = today.getMonth() - birthDateObj.getMonth();
                    if (
                        monthDiff < 0 ||
                        (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
                    ) {
                        age--; // Subtract 1 from age if BirthDate has not occurred yet this year
                    }

                    return {
                        TransId: transaction.TransId,
                        HumanID: transaction.HumanID,
                        HumanName: transaction.HumanName,
                        age: age,
                        PhoneNumber: transaction.PhoneNumber,
                        Notes: transaction.Notes,
                        BranchName: transaction.BranchName,
                        LastDonation: transaction.LastDonation,
                        BloodType: transaction.BloodType,
                        TransDate: transDate,
                        UnitNumber: transaction.UnitNumber,
                        Accepted: transaction.Accepted,
                    };
                });

                setInitialData(processedRows);
                setRows(processedRows);
            })
            .catch((error) => {
                console.error("Error retrieving transactions:", error);
            });
    }, []);

    const handleSearchTextChange = (event) => {
        const searchText = event.target.value;
        setSearchText(searchText);

        if (searchText === "") {
            setRows(initialData);
        } else {
            const filteredRows = initialData.filter((row) =>
                row.HumanName.toLowerCase().includes(searchText.toLowerCase())
            );
            setRows(filteredRows);
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        filterRowsByDate(formattedDate); // Convert date to JavaScript Date object
    };

    const filterRowsByDate = (date) => {
        if (!date) {
            setRows(initialData);
        } else {
            const filteredRows = initialData.filter((row) => row.TransDate > date);
            setRows(filteredRows);
        }
    };

    return (
        <div>
            <TopBar searchText={searchText}
                    onSearchTextChange={handleSearchTextChange}
                    onDateChange={handleDateChange}
            />
            {/* add & new buttons */}
            <Box className={`${style.actionBox}`} sx={{ '& > :not(style)': { m: 1 } }}>
                <a href="./add_doners">
                    <Fab variant="extended" color="success" aria-label="edit">
                        <PersonAddSharpIcon /> <p>new</p>
                    </Fab>
                </a>
            </Box>



            <DonersTable rows={rows} />
        </div>
    );
};

export default Doners;
