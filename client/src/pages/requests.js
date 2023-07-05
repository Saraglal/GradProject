import React, { useState, useEffect } from "react";
import TopBar from ".././Components/topbar/topbar";
import RequestsTable from ".././Components/tables/requestable";

const Requests = () => {
    const [searchText, setSearchText] = useState("");
    const [initialData, setInitialData] = useState([]);
    const [rows, setRows] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const branchNo = localStorage.getItem("branchNo");

    useEffect(() => {

        // Fetch data from the API endpoint
        fetch("http://localhost:3000/transaction/getTransactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ TransTypeId: 2, branchNo }),
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
                        Notes: transaction.Notes,
                        BranchName: transaction.BranchName,
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
            <TopBar
                searchText={searchText}
                onSearchTextChange={handleSearchTextChange}
                onDateChange={handleDateChange}
            />

            <RequestsTable rows={rows}/>
        </div>
    );
};

export default Requests;
