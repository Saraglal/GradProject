import React, { useEffect } from 'react';
import Chart from 'chart.js';

const DonationChart = ({ donationData }) => {
    useEffect(() => {
        const labels = donationData.map((data) => data.year);
        const data = donationData.map((data) => data.amount);

        const chartConfig = {
            type: 'horizontalBar', // Use 'horizontalBar' instead of 'bar'
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Donations',
                        data: data,
                        backgroundColor: 'rgb(34 , 113 , 179, 1)',
                        borderColor: 'rgb(34 , 113 , 179, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        beginAtZero: true,
                        precision: 0,
                    },
                },
            },
        };

        const ctx = document.getElementById('donationChart').getContext('2d');
        new Chart(ctx, chartConfig);
    }, [donationData]);

    return <canvas id="donationChart" width="800" height="400" />;
};

export default DonationChart;
