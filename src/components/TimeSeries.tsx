import { ChartData } from "chart.js";
import LineChart from "./LineChart";
import { useCallback, useEffect, useRef, useState } from "react";
import { Chart } from 'chart.js';
import useGetConfig from "../hooks/useGetConfig";
import colors from "../constant";
import useGetChartOption from "../hooks/useGetChartOptions";

const TimeSeries = () => {
    const [gradient, setGradient] = useState<CanvasGradient | string>(colors.voilet1)
    const chartRef = useRef<Chart | null>(null)
    const { labels, randomNumbers, height, width } = useGetConfig()
    const { options, afterDrawPlugin } = useGetChartOption()

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
                borderWidth: 1,
                borderColor: colors.voilet1,
                fill: true
            },
        ],
    };

    return <div className="relative">
        <p className="absolute top-1/4 w-20 text-center -right-16 z-10 text-white rounded-md px-2 py-1 text-lg bg-black1 font-circularStd" id="hoveredValue"></p>
        <p className="absolute bottom-1/4 w-20 text-center -right-16 z-10 text-white rounded-md px-2 py-1 text-lg bg-blue1 font-circularStd" id="hoveredValue">{randomNumbers[randomNumbers.length - 1]}</p>
        <LineChart ref={chartRef}
            data={data}
            options={options}
            height={height}
            width={width}
            plugins={[afterDrawPlugin]}
        />
    </div>
};

export default TimeSeries;