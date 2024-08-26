import { ChartOptions } from "chart.js";
import { useMemo } from "react";

export const options: ChartOptions<"line"> = {
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


const useGetConfig = () => {

    const { labels, randomNumbers } = useMemo(() => {
        const empArray = new Array(50).fill(0)
        const labels = empArray.reduce((acc, ele, index) => {
            return [...acc, index + ele]
        }, [])

        const randomNumbers = empArray.reduce((acc) => {
            const min = 100
            const max = 500
            const val = Math.floor(Math.random() * (max - min + 1)) + min
            return [...acc, val]
        }, [])
        return { labels, randomNumbers }
    }, [])

    const height = 500;
    const width = 900;

    return { labels, randomNumbers, height, width }
};

export default useGetConfig