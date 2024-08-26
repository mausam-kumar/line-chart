import { ChartData, ChartOptions } from "chart.js";
import LineChart from "./LineChart";
import { useMemo } from "react";

const TimeSeries = () => {

    const { labels, randomNumbers } = useMemo(() => {
        const empArray = new Array(50).fill(0)
        const labels = empArray.reduce((acc, ele, index) => {
            return [...acc, index + ele]
        }, [])

        const randomNumbers = empArray.reduce((acc) => {
            const min = 100
            const max = 1000
            const val = Math.floor(Math.random() * (max - min + 1)) + min
            return [...acc, val]
        }, [])
        return { labels, randomNumbers }
    }, [])

    const height = 500;
    const width = 900;

    const data: ChartData<"line"> = {

        labels,
        datasets: [
            {
                data: randomNumbers,
                backgroundColor: "linear-gradient(180deg, hsla(244, 84%, 59%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)",
                borderWidth: 1,
                borderColor: '#4B40EE',
                fill: true
            },
        ],
    };

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            }
        },
        elements: {
            point: {
                radius: 0
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                display: false
            },
            y: {
                grid: {
                    display: false,
                },
                display: false
            }
        }
    }

    return <LineChart data={data} options={options} height={height} width={width} />
};

export default TimeSeries;