import React, { useEffect } from 'react';
import Chart from 'chart.js';

const LineChart = ({ lineData }) => {
    useEffect(() => {
        const labels = lineData.map((data) => data.year);
        const collectedData = lineData.map((data) => data.collected);
        const stockData = lineData.map((data) => data.stock);

        const chartConfig = {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Collected',
                        data: collectedData,
                        fill: false,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                    {
                        label: 'Stock',
                        data: stockData,
                        fill: false,
                        borderColor: 'rgba(255, 99, 132, 1)',
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

        const ctx = document.getElementById('lineChart').getContext('2d');
        new Chart(ctx, chartConfig);
    }, [lineData]);

    return <canvas id="lineChart" width="800" height="300" />;
};

export default LineChart;
