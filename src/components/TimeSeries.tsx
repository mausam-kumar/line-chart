import { ChartData } from "chart.js";
import LineChart from "./LineChart";
import { useCallback, useEffect, useRef, useState } from "react";
import { Chart } from 'chart.js';
import useGetConfig from "../hooks/useGetConfig";
import colors from "../constant";
import useGetLineChartOption from "../hooks/useGetLineChartOptions";
import useGetBarChartOptions from "../hooks/useGetBarChartOptions";
import BarChart from "./BarChart";

const TimeSeries = () => {
    const [gradient, setGradient] = useState<CanvasGradient | string>(colors.voilet1)
    const chartRef = useRef<Chart | null>(null)
    const { labels, randomNumbers, height, width } = useGetConfig()
    const { options, afterDrawPlugin } = useGetLineChartOption()
    const { options: barChartOptions } = useGetBarChartOptions()

    const getGradientColor = useCallback(() => {
        const chart = chartRef.current;
        const ctx = chart?.ctx;
        if (!ctx) return;

        const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
        gradient.addColorStop(0, colors.voilet2);
        gradient.addColorStop(1, colors.white);
        setGradient(gradient)
    }, [])

    useEffect(() => {
        getGradientColor()
    }, [getGradientColor])

    const data: ChartData<"line"> = {
        labels,
        datasets: [
            {
                data: randomNumbers,
                backgroundColor: gradient,
                borderWidth: 1.2,
                borderColor: colors.voilet1,
                fill: true
            },
        ],
    };

    const barChartData: ChartData<"bar"> = {
        labels,
        datasets: [
            {
                data: randomNumbers,
                backgroundColor: "#E2E4E7",
                borderWidth: 0,
                borderColor: "#E2E4E7",
                barThickness: 4
            },
        ],
    }

    return <div className="relative mt-10 border-b border-x pb-2">
        <p className="absolute top-1/4 w-20 text-center -right-16 z-10 text-white rounded-md leading-10 text-lg bg-black1 font-circularStd" id="hoveredValue"></p>
        <p className="absolute bottom-1/3 w-20 text-center -right-16 z-10 text-white rounded-md px-2 py-1 text-lg bg-blue1 font-circularStd" id="hoveredValue">{randomNumbers[randomNumbers.length - 1]}</p>
        <LineChart ref={chartRef}
            data={data}
            options={options}
            height={height}
            width={width}
            plugins={[afterDrawPlugin]}
        />
        <BarChart data={barChartData} options={barChartOptions} height={50} width={width} />
    </div>
};

export default TimeSeries;