import { ChartData, ChartOptions } from "chart.js";
import LineChart from "./LineChart";
import { useMemo, useRef } from "react";
import { Chart } from 'chart.js';

const TimeSeries = () => {

    const chartRef = useRef<Chart | null>(null)

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

    const { gradient } = useMemo(() => {
        const chart = chartRef.current;
        const ctx = chart?.ctx;
        if(!ctx) return { gradient: "" };

        const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
        gradient.addColorStop(0, 'hsla(244, 84%, 59%, 1)');
        gradient.addColorStop(1, 'hsla(229, 28%, 88%, 1)');
        return { gradient }
    }, [])

    const data: ChartData<"line"> = {
        labels,
        datasets: [
            {
                data: randomNumbers,
                backgroundColor: gradient,
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

    return <LineChart ref={chartRef} data={data} options={options} height={height} width={width} />
};

export default TimeSeries;